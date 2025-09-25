# Variáveis para a aplicação Next.js
variable "app_container_name" {
  description = "Nome do container da aplicação Next.js"
  type        = string
  default     = "unifacisa-nextjs-app"
}

variable "app_image_name" {
  description = "Nome da imagem Docker da aplicação"
  type        = string
  default     = "unifacisa-nextjs-app"
}

variable "app_image_tag" {
  description = "Tag da imagem Docker da aplicação"
  type        = string
  default     = "latest"
}

variable "app_external_port" {
  description = "Porta externa para acesso direto à aplicação Next.js"
  type        = number
  default     = 3001
}

# Variáveis para o nginx
variable "nginx_container_name" {
  description = "Nome do container do nginx"
  type        = string
  default     = "unifacisa-nginx"
}

variable "nginx_external_port" {
  description = "Porta externa para acesso através do nginx (proxy reverso)"
  type        = number
  default     = 8000
}
