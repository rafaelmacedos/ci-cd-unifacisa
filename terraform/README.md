# Terraform - Infraestrutura Docker

Infraestrutura com **Next.js + Nginx** usando Terraform:

1. **Next.js App** - Porta 3001 (redireciona para 8000)
2. **Nginx Proxy** - Porta 8000 (recomendado)

## 🏗️ Arquitetura

```
Internet → Nginx:8000 → Next.js:3001
         ↑ (recomendado)
         └── Next.js:3001 (auto-redirect)
```

## 🚀 Quick Start

```bash
cd terraform
terraform init
terraform apply
# Acesse: http://localhost:8000
```

## 🌐 Acessos

- **Nginx (recomendado)**: http://localhost:8000
- **Next.js direto**: http://localhost:3001 → **redireciona para 8000**

## 🔧 Comandos Úteis

```bash
# Status dos containers
docker ps

# Logs
docker logs unifacisa-nextjs-app
docker logs unifacisa-nginx

# Destruir infraestrutura
terraform destroy
```

## ⚙️ Variáveis

- `app_external_port`: Porta da aplicação (padrão: 3001)
- `nginx_external_port`: Porta do nginx (padrão: 8000)
- `app_container_name`: Nome do container (padrão: "unifacisa-nextjs-app")
- `nginx_container_name`: Nome do nginx (padrão: "unifacisa-nginx")

## 📁 Arquivos

- `main.tf`: Configuração principal
- `variables.tf`: Variáveis
- `outputs.tf`: Outputs
- `nginx.conf`: Configuração do proxy
