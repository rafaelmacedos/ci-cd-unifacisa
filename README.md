# 📚 História S.I - Unifacisa

[![CI/CD Pipeline](https://github.com/rafaelmacedos/ci-cd-unifacisa/actions/workflows/ci.yml/badge.svg)](https://github.com/rafaelmacedos/ci-cd-unifacisa/actions/workflows/ci.yml)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue)](https://www.docker.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![AWS](https://img.shields.io/badge/AWS-EC2-orange)](https://aws.amazon.com/)

> Projeto desenvolvido para a competência **Elaborar um pipeline CI/CD para Cloud Computing** - Uma aplicação web moderna que conta a trajetória do curso de Sistemas de Informação da Unifacisa desde sua fundação.

## 🚀 Sobre o Projeto

Aplicação web desenvolvida em **Next.js** que apresenta a história completa do curso de Sistemas de Informação da Unifacisa, com deploy automático via GitHub Actions para AWS EC2.

**🌐 Repositório**: [https://github.com/rafaelmacedos/ci-cd-unifacisa](https://github.com/rafaelmacedos/ci-cd-unifacisa)

## 📊 Status do Projeto

- ✅ **Desenvolvimento**: Concluído
- ✅ **Testes**: Implementados com Jest
- ✅ **CI/CD**: Pipeline completo no GitHub Actions
- ✅ **Deploy**: Automático para AWS EC2
- ✅ **Containerização**: Docker + Docker Compose
- ✅ **Monitoramento**: Health checks e logs

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React 19** - Biblioteca de interface

### DevOps & Infraestrutura
- **Docker** - Containerização
- **Docker Compose** - Orquestração de containers
- **Nginx** - Proxy reverso
- **GitHub Actions** - CI/CD Pipeline
- **AWS EC2** - Servidor de produção
- **Jest** - Testes automatizados

## 📦 Como Executar

### 🏠 Desenvolvimento Local
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Executar testes
npm run test

# Executar testes com coverage
npm run test:coverage
```

### 🐳 Produção com Docker Compose
```bash
# Build e iniciar containers
docker-compose up -d --build

# Verificar status
docker-compose ps

# Ver logs
docker-compose logs -f

# Acesse: http://localhost:8000
```

### 🚀 Deploy Automático para AWS EC2
O deploy automático é executado via GitHub Actions quando há push para a branch `main`:

#### Pipeline Completo:
1. **🧪 Testes** - Executa todos os testes e coverage
2. **🔨 Build** - Verifica lint e build do Next.js
3. **🐳 Docker** - Build e push da imagem para DockerHub
4. **🚀 Deploy** - Deploy automático na AWS EC2

#### Configuração:
- **Secrets necessários**: Veja [GITHUB-SECRETS.md](GITHUB-SECRETS.md)
- **Preparação da VM**: Veja [DEPLOY-AUTOMATION.md](DEPLOY-AUTOMATION.md)

## 🐳 Infraestrutura

### Arquitetura de Produção
- **Next.js App**: Porta 3000 (container interno)
- **Nginx Proxy**: Porta 8000 (acesso externo)
- **Docker Compose**: Orquestração automática
- **Health Checks**: Monitoramento de saúde
- **Auto-restart**: Reinicialização automática

### Estrutura dos Containers
```
┌─────────────────┐    ┌─────────────────┐
│   Nginx Proxy   │────│  Next.js App    │
│   Porta: 8000   │    │   Porta: 3000   │
│   (Externo)     │    │   (Interno)     │
└─────────────────┘    └─────────────────┘
```

## 🔄 GitHub Actions CI/CD

### Pipeline Automático
- **Trigger**: `pull_request`, `push`, `workflow_dispatch`
- **Ambiente**: Ubuntu Latest + Node.js 20
- **Cache**: Otimização de dependências npm
- **Testes**: Jest + Coverage reports
- **Lint**: ESLint + Prettier
- **Build**: Next.js production build
- **Docker**: Build e push para DockerHub
- **Deploy**: Deploy automático para AWS EC2 (apenas main)

### Workflow Jobs
1. **test** - Executa testes e coverage
2. **build** - Verifica lint e build
3. **docker** - Build e push da imagem
4. **deploy** - Deploy automático na EC2

## 🎯 Funcionalidades

### Frontend
- ✨ **Design responsivo** e moderno
- 📱 **Navegação suave** entre seções
- 🎨 **Interface intuitiva** com cores da Unifacisa
- 📊 **Timeline interativa** da história do curso
- 📈 **Estatísticas** e diferenciais destacados

### DevOps
- 🚀 **Deploy automatizado** via GitHub Actions
- 🐳 **Containerização** com Docker
- 🔄 **CI/CD Pipeline** completo
- 📊 **Monitoramento** e health checks
- 🔒 **Segurança** com secrets e SSH

## 📚 Documentação

- **[GITHUB-SECRETS.md](GITHUB-SECRETS.md)** - Configuração dos secrets do GitHub
- **[DEPLOY-AUTOMATION.md](DEPLOY-AUTOMATION.md)** - Guia completo de deploy automático

## 🚀 Quick Start

### Para Desenvolvimento
```bash
git clone https://github.com/rafaelmacedos/ci-cd-unifacisa.git
cd ci-cd-unifacisa
npm install
npm run dev
```

### Para Deploy Automático
1. Configure os secrets no GitHub
2. Prepare sua instância EC2
3. Faça push para `main`
4. Acompanhe o deploy em Actions

---

*🙈 Made by the boys 🐒*
