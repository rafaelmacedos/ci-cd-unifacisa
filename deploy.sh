#!/bin/bash

# Script único de deploy para EC2 Amazon Linux 2
# Faz tudo: instala dependências, configura sistema e faz deploy

set -e

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date +'%H:%M:%S')] $1${NC}"; }
error() { echo -e "${RED}[ERROR] $1${NC}"; exit 1; }
warning() { echo -e "${YELLOW}[WARNING] $1${NC}"; }

# Verificar se é root
if [[ $EUID -ne 0 ]]; then
   error "Execute como root: sudo $0"
fi

echo -e "${GREEN}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    UNIFACISA - DEPLOY                       ║"
echo "║              Script único para Amazon Linux 2023            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# 1. Atualizar sistema
log "Atualizando sistema..."
dnf update -y
dnf install -y wget git unzip

# 2. Instalar Docker
log "Instalando Docker..."
if ! command -v docker &> /dev/null; then
    dnf install -y docker
    systemctl start docker
    systemctl enable docker
    usermod -a -G docker ec2-user
    log "Docker instalado"
else
    warning "Docker já instalado"
fi

# 3. Instalar Docker Compose
log "Instalando Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    wget -O /usr/local/bin/docker-compose "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)"
    chmod +x /usr/local/bin/docker-compose
    ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
    log "Docker Compose instalado"
else
    warning "Docker Compose já instalado"
fi

# 4. Pular configuração de firewall (Security Group cuida disso)
log "Pulando configuração de firewall (Security Group já configurado)..."

# 5. Configurar swap se necessário
TOTAL_RAM=$(free -m | awk 'NR==2{printf "%.0f", $2}')
if [ "$TOTAL_RAM" -lt 2048 ]; then
    warning "RAM: ${TOTAL_RAM}MB. Verificando swap..."
    if [ ! -f /swapfile ]; then
        warning "Criando swap..."
        dd if=/dev/zero of=/swapfile bs=1024 count=2097152
        chmod 600 /swapfile
        mkswap /swapfile
        swapon /swapfile
        echo '/swapfile none swap sw 0 0' >> /etc/fstab
        echo 'vm.swappiness=10' >> /etc/sysctl.conf
        sysctl -p
    else
        warning "Swap já existe, ativando..."
        swapon /swapfile 2>/dev/null || true
    fi
fi

# 6. Criar diretório do projeto
log "Criando diretório do projeto..."
mkdir -p /opt/unifacisa-app
chown -R ec2-user:ec2-user /opt/unifacisa-app

# 7. Clonar/atualizar repositório
log "Configurando repositório..."
cd /opt/unifacisa-app

if [ -d ".git" ]; then
    log "Atualizando repositório..."
    git pull origin main
else
    log "Clonando repositório..."
    git clone https://github.com/rafaelmacedos/ci-cd-unifacisa.git .
fi

# 8. Verificar arquivos necessários
log "Verificando arquivos necessários..."
ls -la
if [ ! -f "package.json" ] || [ ! -f "Dockerfile" ] || [ ! -f "docker-compose.yml" ]; then
    error "Arquivos necessários não encontrados. Arquivos presentes:"
    ls -la
fi
log "Todos os arquivos necessários encontrados"

# 9. Parar containers existentes
log "Parando containers existentes..."
cd /opt/unifacisa-app
log "Diretório atual: $(pwd)"
log "Arquivos no diretório:"
ls -la
sudo docker-compose -f /opt/unifacisa-app/docker-compose.yml down || true

# 10. Construir e iniciar containers
log "Construindo e iniciando containers..."
if [ ! -f "docker-compose.yml" ]; then
    error "docker-compose.yml não encontrado em $(pwd)"
fi
sudo docker-compose -f /opt/unifacisa-app/docker-compose.yml up --build -d

# 11. Aguardar aplicação subir
log "Aguardando aplicação..."
sleep 20

# 12. Verificar se está funcionando
cd /opt/unifacisa-app
if sudo docker-compose -f /opt/unifacisa-app/docker-compose.yml ps | grep -q "Up"; then
    PUBLIC_IP=$(wget -qO- http://169.254.169.254/latest/meta-data/public-ipv4)
    
    echo -e "${GREEN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                    DEPLOY CONCLUÍDO!                       ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    log "✅ Deploy realizado com sucesso!"
    log "🌐 Aplicação disponível em: http://$PUBLIC_IP:8000"
    log "🔍 Health check: http://$PUBLIC_IP:8000/health"
    
    echo
    warning "IMPORTANTE: Verifique se o Security Group da EC2 permite tráfego na porta 8000"
    
else
    error "❌ Falha no deploy. Verifique os logs: sudo docker-compose logs"
fi

# 13. Criar script de monitoramento
log "Criando script de monitoramento..."
cat > /opt/unifacisa-app/monitor.sh << 'EOF'
#!/bin/bash
cd /opt/unifacisa-app
echo "=== Status dos Containers ==="
sudo docker-compose ps
echo -e "\n=== Uso de Recursos ==="
sudo docker stats --no-stream
echo -e "\n=== Logs Recentes ==="
sudo docker-compose logs --tail=10
echo -e "\n=== IP Público ==="
wget -qO- http://169.254.169.254/latest/meta-data/public-ipv4
EOF

chmod +x /opt/unifacisa-app/monitor.sh
chown ec2-user:ec2-user /opt/unifacisa-app/monitor.sh

# 14. Criar serviço systemd para auto-start
log "Configurando auto-start..."
cat > /etc/systemd/system/unifacisa-app.service << 'EOF'
[Unit]
Description=Unifacisa Next.js Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/unifacisa-app
ExecStart=/usr/local/bin/docker-compose -f /opt/unifacisa-app/docker-compose.yml up -d
ExecStop=/usr/local/bin/docker-compose -f /opt/unifacisa-app/docker-compose.yml down
TimeoutStartSec=0
User=ec2-user
Group=ec2-user

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable unifacisa-app.service

echo
info "Comandos úteis:"
info "• Monitorar: sudo -u ec2-user /opt/unifacisa-app/monitor.sh"
info "• Logs: docker-compose logs -f"
info "• Reiniciar: sudo systemctl restart unifacisa-app"
info "• Status: sudo systemctl status unifacisa-app"
