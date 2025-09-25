# Outputs da aplicação Next.js
output "app_container_name" {
  description = "Nome do container da aplicação Next.js"
  value       = docker_container.app.name
}

output "app_container_id" {
  description = "ID do container da aplicação Next.js"
  value       = docker_container.app.id
}

output "app_image_name" {
  description = "Nome da imagem Docker da aplicação"
  value       = docker_image.app.name
}

output "app_image_id" {
  description = "ID da imagem Docker da aplicação"
  value       = docker_image.app.image_id
}

output "app_direct_url" {
  description = "URL para acessar a aplicação Next.js diretamente"
  value       = "http://localhost:${var.app_external_port}"
}

# Outputs do nginx
output "nginx_container_name" {
  description = "Nome do container do nginx"
  value       = docker_container.nginx.name
}

output "nginx_container_id" {
  description = "ID do container do nginx"
  value       = docker_container.nginx.id
}

output "nginx_image_name" {
  description = "Nome da imagem Docker do nginx"
  value       = docker_image.nginx.name
}

output "nginx_image_id" {
  description = "ID da imagem Docker do nginx"
  value       = docker_image.nginx.image_id
}

output "nginx_proxy_url" {
  description = "URL para acessar a aplicação através do nginx (proxy reverso)"
  value       = "http://localhost:${var.nginx_external_port}"
}
