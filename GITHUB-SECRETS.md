# 🔐 Configuração dos Secrets do GitHub Actions

Para que o deploy automático funcione, você precisa configurar os seguintes secrets no seu repositório GitHub.

## 📋 Secrets Necessários

### 1. **DOCKERHUB_USERNAME** (já existente)
- **Descrição**: Seu nome de usuário do Docker Hub
- **Exemplo**: `seuusuario`

### 2. **DOCKERHUB_TOKEN** (já existente)
- **Descrição**: Token de acesso do Docker Hub
- **Como obter**: Docker Hub → Account Settings → Security → New Access Token

### 3. **AWS_SSH_PRIVATE_KEY** (novo)
- **Descrição**: Chave privada SSH para acessar sua instância EC2
- **Como obter**: Conteúdo do arquivo `.pem` da sua instância AWS
- **Exemplo**:
```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA7X8... (conteúdo completo da chave)
-----END RSA PRIVATE KEY-----
```

### 4. **AWS_EC2_HOST** (novo)
- **Descrição**: IP público ou domínio da sua instância EC2
- **Exemplo**: `54.123.456.789` ou `meuapp.exemplo.com`

### 5. **AWS_EC2_USER** (novo)
- **Descrição**: Usuário para conectar na instância EC2
- **Exemplo**: `ubuntu` (padrão para instâncias Ubuntu)

## 🛠️ Como Configurar os Secrets

### Passo 1: Acessar as Configurações do Repositório
1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**

### Passo 2: Adicionar os Secrets
1. Clique em **New repository secret**
2. Digite o nome do secret (ex: `AWS_SSH_PRIVATE_KEY`)
3. Cole o valor do secret
4. Clique em **Add secret**
5. Repita para todos os secrets necessários

## 🔑 Como Obter a Chave SSH Privada

### Opção 1: Se você já tem a chave
```bash
# No Windows, abra o arquivo .pem no Notepad
notepad sua-chave.pem

# Copie todo o conteúdo, incluindo as linhas:
# -----BEGIN RSA PRIVATE KEY-----
# -----END RSA PRIVATE KEY-----
```

### Opção 2: Se você perdeu a chave
1. Acesse o AWS Console
2. Vá para **EC2** → **Key Pairs**
3. Crie uma nova key pair
4. Baixe o arquivo `.pem`
5. **Importante**: Você precisará recriar a instância ou adicionar a nova chave

## 🌐 Como Obter o IP da Instância

### Via AWS Console
1. Acesse o AWS Console
2. Vá para **EC2** → **Instances**
3. Selecione sua instância
4. Copie o **Public IPv4 address**

### Via AWS CLI
```bash
aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId,PublicIpAddress]' --output table
```

## 🔧 Configuração da Instância EC2

### Pré-requisitos na Instância
Sua instância EC2 Ubuntu deve ter:

1. **Docker instalado**
2. **Docker Compose instalado**
3. **Git instalado**
4. **Node.js instalado** (opcional, para desenvolvimento)
5. **Porta 8000 liberada** no Security Group

### Script de Preparação da Instância
Execute este script na sua instância EC2 para preparar o ambiente:

```bash
#!/bin/bash
# Preparar instância EC2 para deploy automático

# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar dependências
sudo apt install -y curl wget git unzip

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
rm get-docker.sh

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Configurar firewall
sudo ufw allow 22/tcp
sudo ufw allow 8000/tcp
sudo ufw --force enable

# Criar diretório da aplicação
sudo mkdir -p /opt/unifacisa-app
sudo chown $USER:$USER /opt/unifacisa-app

echo "✅ Instância preparada para deploy automático!"
echo "Agora configure os secrets no GitHub e faça push para a branch main."
```

## 🔒 Configuração do Security Group

No AWS Console, configure o Security Group da sua instância:

### Regras de Entrada (Inbound)
- **SSH (22)**: Sua IP ou 0.0.0.0/0 (não recomendado para produção)
- **HTTP (8000)**: 0.0.0.0/0 (para acesso à aplicação)

### Regras de Saída (Outbound)
- **All traffic**: 0.0.0.0/0 (padrão)

## 🧪 Testando a Configuração

### Teste 1: Conectividade SSH
```bash
# No Windows
ssh -i sua-chave.pem ubuntu@SEU-IP-EC2
```

### Teste 2: Deploy Manual
```bash
# Na instância EC2
cd /opt/unifacisa-app
git clone https://github.com/SEU-USUARIO/ci-cd-unifacisa.git .
docker-compose up -d --build
```

### Teste 3: Acesso à Aplicação
```bash
# Testar localmente na instância
curl http://localhost:8000

# Testar externamente
curl http://SEU-IP-EC2:8000
```

## 🚨 Troubleshooting

### Erro: "Permission denied (publickey)"
- Verifique se a chave SSH está correta
- Verifique se o usuário está correto (geralmente `ubuntu`)
- Verifique se a chave tem as permissões corretas

### Erro: "Connection refused"
- Verifique se o Security Group permite SSH (porta 22)
- Verifique se a instância está rodando
- Verifique se o IP está correto

### Erro: "Docker not found"
- Execute o script de preparação da instância
- Verifique se o Docker está instalado e rodando

### Erro: "Port 8000 not accessible"
- Verifique se o Security Group permite a porta 8000
- Verifique se a aplicação está rodando
- Verifique se o firewall local está configurado

## 📊 Monitoramento do Deploy

Após configurar os secrets, você pode monitorar o deploy:

1. **GitHub Actions**: Vá para a aba "Actions" do seu repositório
2. **Logs**: Clique no workflow para ver os logs detalhados
3. **Status**: Verifique se todas as etapas passaram com sucesso

## 🎯 Próximos Passos

1. ✅ Configure todos os secrets no GitHub
2. ✅ Prepare sua instância EC2
3. ✅ Faça push para a branch `main`
4. ✅ Monitore o deploy no GitHub Actions
5. ✅ Acesse sua aplicação em `http://SEU-IP-EC2:8000`

---

**Nota**: Mantenha os secrets seguros e nunca os compartilhe publicamente. Eles contêm informações sensíveis de acesso à sua infraestrutura.
