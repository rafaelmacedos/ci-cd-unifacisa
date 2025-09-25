terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "npipe:////.//pipe//docker_engine"
}

# Build da imagem customizada da aplicação Next.js
resource "docker_image" "app" {
  name = "${var.app_image_name}:${var.app_image_tag}"
  build {
    context    = abspath("..")
    dockerfile = "Dockerfile"
  }
  keep_locally = true
}

# Imagem do nginx - usando pull_triggers para forçar atualização
resource "docker_image" "nginx" {
  name         = "nginx:alpine"
  keep_locally = false
  pull_triggers = ["nginx:alpine"]
}

# Container da aplicação Next.js
resource "docker_container" "app" {
  image = docker_image.app.image_id
  name  = var.app_container_name
  
  # A aplicação Next.js roda na porta interna 3000
  ports {
    internal = 3000
    external = var.app_external_port
  }

  # Restart policy
  restart = "unless-stopped"

  # Health check para a aplicação Next.js
  healthcheck {
    test     = ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/"]
    interval = "30s"
    timeout  = "10s"
    retries  = 3
    start_period = "40s"
  }
}

# Container do nginx (proxy reverso)
resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = var.nginx_container_name
  
  # Nginx expõe a porta 80 externamente
  ports {
    internal = 80
    external = var.nginx_external_port
  }

  # Monta a configuração do nginx
  volumes {
    host_path      = abspath("${path.module}/nginx.conf")
    container_path = "/etc/nginx/conf.d/default.conf"
  }

  # Restart policy
  restart = "unless-stopped"

  # Depende da aplicação estar rodando
  depends_on = [docker_container.app]

  # Health check para o nginx
  healthcheck {
    test     = ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:80/"]
    interval = "30s"
    timeout  = "10s"
    retries  = 3
    start_period = "10s"
  }
}
