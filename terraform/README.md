# Terraform - Infraestrutura Docker

Esta configuração Terraform cria uma infraestrutura com dois containers:

1. **Aplicação Next.js** - Container com a aplicação Next.js rodando na porta 3000 (exposta como 3001)
2. **Nginx** - Container com nginx como proxy reverso na porta 80 (exposta como 8000)

## Arquitetura

```
Internet → Nginx (porta 8000) → Next.js App (porta 3001)
```

## Como usar

### 1. Inicializar o Terraform
```bash
cd terraform
terraform init
```

### 2. Planejar a infraestrutura
```bash
terraform plan
```

### 3. Aplicar a infraestrutura
```bash
terraform apply
```

### 4. Acessar a aplicação

- **Através do nginx (recomendado)**: http://localhost:8000
- **Acesso direto à aplicação**: http://localhost:3001

### 5. Verificar o status dos containers
```bash
docker ps
```

### 6. Ver logs
```bash
# Logs da aplicação Next.js
docker logs unifacisa-nextjs-app

# Logs do nginx
docker logs unifacisa-nginx
```

### 7. Destruir a infraestrutura
```bash
terraform destroy
```

## Variáveis

As seguintes variáveis podem ser customizadas:

- `app_container_name`: Nome do container da aplicação (padrão: "unifacisa-nextjs-app")
- `app_image_name`: Nome da imagem da aplicação (padrão: "unifacisa-nextjs-app")
- `app_image_tag`: Tag da imagem da aplicação (padrão: "latest")
- `app_external_port`: Porta externa da aplicação (padrão: 3001)
- `nginx_container_name`: Nome do container do nginx (padrão: "unifacisa-nginx")
- `nginx_external_port`: Porta externa do nginx (padrão: 8000)

## Estrutura dos arquivos

- `main.tf`: Configuração principal do Terraform
- `variables.tf`: Definição das variáveis
- `outputs.tf`: Outputs da infraestrutura
- `nginx.conf`: Configuração do nginx como proxy reverso
