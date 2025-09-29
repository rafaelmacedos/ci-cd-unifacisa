# 🔐 GitHub Secrets - Configuração

Este documento lista todos os secrets necessários para o funcionamento do pipeline CI/CD.

## 📋 Secrets Obrigatórios

Configure os seguintes secrets no repositório GitHub em **Settings > Secrets and variables > Actions**:

### 🐳 Docker Hub
- **`DOCKERHUB_USERNAME`** - Seu username do Docker Hub
- **`DOCKERHUB_TOKEN`** - Token de acesso do Docker Hub (não use senha)

### ☁️ AWS EC2
- **`AWS_EC2_HOST`** - IP público ou domínio da instância EC2
- **`AWS_EC2_USER`** - Usuário SSH (geralmente `ec2-user`)
- **`AWS_SSH_PRIVATE_KEY`** - Chave privada SSH para acesso à EC2

## 🚀 Como Configurar

### 1. Docker Hub Token
```bash
# Acesse: https://hub.docker.com/settings/security
# Clique em "New Access Token"
# Nome: "github-actions"
# Permissões: Read, Write, Delete
```

### 2. Chave SSH AWS (geralmente providad pela própria AWS)
```bash
# Gerar chave SSH (se não tiver)
ssh-keygen -t rsa -b 4096 -C "github-actions"

# Copiar chave pública para EC2
ssh-copy-id -i ~/.ssh/id_rsa.pub ubuntu@SEU_IP_EC2

# Copiar conteúdo da chave privada para o secret
cat ~/.ssh/id_rsa
```

### 3. Configurar Secrets no GitHub
1. Acesse: `https://github.com/rafaelmacedos/ci-cd-unifacisa/settings/secrets/actions`
2. Clique em **"New repository secret"**
3. Adicione cada secret com os nomes exatos listados acima

## ✅ Verificação

Após configurar todos os secrets, o pipeline deve funcionar automaticamente em:
- **Push para `main`** → Deploy automático
- **Pull Request** → Testes e build apenas

---

*🔒 Mantenha estes secrets seguros e nunca os exponha em código público.*
