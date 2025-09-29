# 🚀 Deploy Automation - Script deploy.sh

O deploy automático é executado pelo script `deploy.sh` que é baixado e executado automaticamente pelo GitHub Actions.

## 📋 Pré-requisitos da EC2

- **Amazon Linux 2023** (recomendado) ou Ubuntu 20.04+
- **Portas liberadas**: 22 (SSH) e 8000 (HTTP) no Security Group
- **Usuário**: `ec2-user` (Amazon Linux) ou `ubuntu` (Ubuntu)
- **Acesso SSH** configurado com a chave privada

## 🔄 Como Funciona o Deploy

### 1. Deploy Automático (CI Pipeline)
- **Push para `main`** → Executa deploy completo automaticamente
- **Pull Request** → Apenas testes (sem deploy)

### 2. Deploy Manual (Manual Deploy)
- **Workflow separado** → Execute manualmente quando quiser
- **Características**:
  - **Sempre executa testes** (obrigatório)
  - Deploy direto para produção
  - Usa tag `latest` do Docker

### 3. Processo Automático
O workflow baixa e executa o `deploy.sh`:
```bash
# Baixado automaticamente pelo GitHub Actions
wget -O /tmp/deploy.sh https://raw.githubusercontent.com/rafaelmacedos/ci-cd-unifacisa/main/deploy.sh
chmod +x /tmp/deploy.sh
sudo /tmp/deploy.sh
```

## 🛠️ O que o deploy.sh faz

### Instalação Automática
- ✅ **Atualiza sistema** (dnf update)
- ✅ **Instala Docker** e Docker Compose
- ✅ **Configura swap** (se RAM < 2GB)
- ✅ **Cria diretório** `/opt/unifacisa-app`
- ✅ **Clona repositório** do GitHub

### Deploy da Aplicação
- ✅ **Para containers** existentes
- ✅ **Build e inicia** novos containers
- ✅ **Verifica funcionamento**
- ✅ **Cria script de monitoramento**
- ✅ **Configura auto-start** (systemd)

### Resultado Final
- 🌐 **Aplicação rodando** na porta 8000
- 🔄 **Auto-restart** configurado
- 📊 **Monitoramento** disponível

## 🚀 Deploy Manual via GitHub Actions

### Como Executar Deploy Manual
1. **Acesse**: `https://github.com/rafaelmacedos/ci-cd-unifacisa/actions`
2. **Clique** em "Manual Deploy" no menu lateral
3. **Clique** em "Run workflow"
4. **Execute** o deploy (sem configurações adicionais)

### Características do Deploy Manual
- ✅ **Testes obrigatórios** (sempre executa)
- ✅ **Tag `latest`** da imagem Docker
- ✅ **Deploy direto** para produção
- ✅ **Logs detalhados** do processo

### Execução Direta na EC2 (se necessário)
```bash
# Conectar via SSH
ssh -i sua-chave.pem ec2-user@SEU_IP_EC2

# Baixar e executar o script
wget -O deploy.sh https://raw.githubusercontent.com/rafaelmacedos/ci-cd-unifacisa/main/deploy.sh
chmod +x deploy.sh
sudo ./deploy.sh
```

---

*🎯 O deploy é 100% automático via GitHub Actions. O script `deploy.sh` cuida de toda a configuração.*
