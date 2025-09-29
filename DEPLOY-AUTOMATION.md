# 🚀 Deploy Automático - GitHub Actions + AWS EC2

## ✅ O que foi implementado

### 🔄 GitHub Actions Pipeline Completo
1. **Test** - Executa testes e coverage
2. **Build** - Verifica lint e build
3. **Docker** - Build e push da imagem para DockerHub
4. **Deploy** - Deploy automático para AWS EC2 (apenas na branch main)

### 🎯 Etapa de Deploy
- **Trigger**: Apenas em push para branch `main`
- **Dependências**: Executa após test, build e docker
- **SSH**: Conecta na instância EC2 via SSH
- **Backup**: Faz backup da versão atual
- **Update**: Atualiza código via git
- **Deploy**: Executa deploy automático
- **Verification**: Testa se aplicação está funcionando

## 📋 Arquivos Criados/Modificados

### ✅ Modificados
- **`.github/workflows/ci.yml`** - Adicionada etapa de deploy
- **`README.md`** - Documentação do deploy automático

### ✅ Criados
- **`GITHUB-SECRETS.md`** - Guia de configuração dos secrets
- **`prepare-ec2.sh`** - Script de preparação da instância EC2

## 🔐 Secrets Necessários

Configure estes secrets no GitHub (Settings → Secrets and variables → Actions):

1. **DOCKERHUB_USERNAME** (já existente)
2. **DOCKERHUB_TOKEN** (já existente)
3. **AWS_SSH_PRIVATE_KEY** (novo) - Chave privada SSH
4. **AWS_EC2_HOST** (novo) - IP da instância EC2
5. **AWS_EC2_USER** (novo) - Usuário da instância (geralmente `ubuntu`)

## 🛠️ Como Configurar

### 1. Preparar Instância EC2
```bash
# Na sua instância EC2 Ubuntu
wget https://raw.githubusercontent.com/SEU-USUARIO/ci-cd-unifacisa/main/prepare-ec2.sh
chmod +x prepare-ec2.sh
./prepare-ec2.sh
```

### 2. Configurar Secrets no GitHub
1. Vá para Settings → Secrets and variables → Actions
2. Adicione os 5 secrets listados acima
3. Veja detalhes em [GITHUB-SECRETS.md](GITHUB-SECRETS.md)

### 3. Testar Deploy
```bash
# Faça push para a branch main
git add .
git commit -m "Test deploy automation"
git push origin main
```

## 🔍 Como Funciona o Deploy

### Fluxo Automático
1. **Push para main** → GitHub Actions inicia
2. **Testes passam** → Build é executado
3. **Build passa** → Docker image é criada e enviada
4. **Docker passa** → Deploy é executado
5. **SSH na EC2** → Código é atualizado
6. **Deploy local** → Aplicação é reiniciada
7. **Verificação** → Testa se está funcionando

### Comandos Executados na EC2
```bash
# Parar aplicação atual
docker-compose down

# Backup da versão atual
git stash push -m "Backup before deploy"

# Atualizar código
git fetch origin
git reset --hard origin/main

# Deploy
./deploy.sh  # ou deploy manual

# Verificar status
docker-compose ps
curl http://localhost:8000
```

## 📊 Monitoramento

### GitHub Actions
- Vá para a aba "Actions" do repositório
- Clique no workflow para ver logs detalhados
- Verifique se todas as etapas passaram

### Instância EC2
```bash
# Status da aplicação
cd /opt/unifacisa-app
docker-compose ps

# Logs da aplicação
docker-compose logs -f

# Logs do sistema
tail -f /var/log/unifacisa-app.log
```

## 🚨 Troubleshooting

### Deploy Falha
1. **Verifique os logs** no GitHub Actions
2. **Verifique conectividade SSH** na instância
3. **Verifique se Docker está rodando** na EC2
4. **Verifique logs da aplicação** na EC2

### Aplicação Não Responde
1. **Verifique containers**: `docker-compose ps`
2. **Verifique logs**: `docker-compose logs`
3. **Verifique firewall**: `sudo ufw status`
4. **Verifique porta**: `sudo netstat -tlnp | grep :8000`

### Secrets Incorretos
1. **Verifique chave SSH**: Teste conexão manual
2. **Verifique IP**: Confirme o IP da instância
3. **Verifique usuário**: Confirme o usuário (geralmente `ubuntu`)

## 🎯 Benefícios

### ✅ Automatização Completa
- Deploy automático em push para main
- Rollback automático em caso de falha
- Backup automático antes do deploy

### ✅ Segurança
- Secrets protegidos no GitHub
- SSH com chaves privadas
- Firewall configurado

### ✅ Monitoramento
- Logs detalhados no GitHub Actions
- Health checks automáticos
- Monitoramento contínuo na EC2

### ✅ Flexibilidade
- Deploy manual ainda disponível
- Rollback manual possível
- Configuração personalizável

## 🔄 Próximos Passos

1. ✅ Configure os secrets no GitHub
2. ✅ Execute o script de preparação na EC2
3. ✅ Faça push para main para testar
4. ✅ Monitore o deploy no GitHub Actions
5. ✅ Acesse sua aplicação em `http://SEU-IP-EC2:8000`

---

**Resultado**: Deploy completamente automatizado! 🚀

Agora, sempre que você fizer push para a branch `main`, sua aplicação será automaticamente testada, construída e deployada na sua instância AWS EC2.
