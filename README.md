# 📚 História S.I - Unifacisa

> Projeto desenvolvido para a competência **Elaborar um pipeline CI/CD para Cloud Computing** - Uma aplicação web simples que conta a trajetória do curso de Sistemas de Informação da Unifacisa desde sua fundação.

## 🚀 Sobre o Projeto

Aplicação web desenvolvida em **Next.js** que apresenta a história completa do curso de Sistemas de Informação da Unifacisa.

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React 19** - Biblioteca de interface

## 📦 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🔄 GitHub Actions

O projeto utiliza **GitHub Actions** para automação de CI/CD:

- **Trigger**: Executa em `pull_request`, `push` e `workflow_dispatch`
- **Node.js 20**: Ambiente de execução
- **Cache npm**: Otimização de dependências
- **Lint**: Verificação de código com ESLint
- **Build**: Teste de build do Next.js

O workflow garante que o código esteja sempre funcional antes de ser integrado ao repositório principal.

## 🎯 Funcionalidades

- ✨ **Design responsivo** e moderno
- 📱 **Navegação suave** entre seções
- 🎨 **Interface intuitiva** com cores da Unifacisa
- 📊 **Timeline interativa** da história do curso
- 📈 **Estatísticas** e diferenciais destacados

*🙈 Made by the boys 🐒*
