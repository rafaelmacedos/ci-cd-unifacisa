# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos necessários para otimizar o cache
COPY package.json package-lock.json ./

# Instala dependências ignorando peer dependencies problemáticas
RUN npm ci --legacy-peer-deps

COPY . .

# Gera o build da aplicação Next.js
RUN npm run build

# Etapa 2: Servidor otimizado para produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos necessários do builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json

# Define a porta padrão do Next.js
EXPOSE 3000

# Inicia a aplicação Next.js
CMD ["npm", "start"]