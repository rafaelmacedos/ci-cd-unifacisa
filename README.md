# 📚 História S.I - Unifacisa

> Projeto desenvolvido para a competência **Elaborar um pipeline CI/CD para Cloud Computing** - Uma aplicação web simples que conta a trajetória do curso de Sistemas de Informação da Unifacisa desde sua fundação.

## 🚀 Sobre o Projeto

Aplicação web desenvolvida em **Next.js** que apresenta a história completa do curso de Sistemas de Informação da Unifacisa.

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React 19** - Biblioteca de interface
- **Docker** - Containerização
- **Terraform** - Infraestrutura como código
- **Nginx** - Proxy reverso

## 📦 Como Executar

### Desenvolvimento Local
```bash
npm install
npm run dev
```

### Produção com Docker + Terraform
```bash
cd terraform
terraform init
terraform apply
# Acesse: http://localhost:8000
```

## 🐳 Infraestrutura

- **Next.js App**: Porta 3001 (redireciona para 8000)
- **Nginx Proxy**: Porta 8000 (recomendado)
- **Auto-redirect**: Porta 3001 → 8000

## 🔄 GitHub Actions

- **Trigger**: `pull_request`, `push`, `workflow_dispatch`
- **Node.js 20**: Ambiente de execução
- **Cache npm**: Otimização de dependências
- **Lint**: Verificação de código com ESLint
- **Build**: Teste de build do Next.js

## 🎯 Funcionalidades

- ✨ **Design responsivo** e moderno
- 📱 **Navegação suave** entre seções
- 🎨 **Interface intuitiva** com cores da Unifacisa
- 📊 **Timeline interativa** da história do curso
- 📈 **Estatísticas** e diferenciais destacados
- 🔄 **Redirecionamento automático** para nginx

*🙈 Made by the boys 🐒*
