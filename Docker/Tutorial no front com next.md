# **Tutorial: Usando Docker com Next.js e PNPM**

Este guia mostra como criar e configurar um ambiente Docker para sua aplicação **Next.js** utilizando o gerenciador de pacotes **PNPM**.

---

## **Pré-requisitos**

- Node.js instalado (localmente para desenvolvimento).
- Docker e Docker Compose instalados.
- Uma aplicação Next.js configurada (você pode criar uma nova com o comando: `npx create-next-app@latest`).

---

## **1. Estrutura do Projeto**

Certifique-se de que a estrutura básica do seu projeto seja semelhante a esta:

```
my-next-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── (outras rotas e componentes)
├── public/
├── styles/
├── package.json
├── pnpm-lock.yaml
└── Dockerfile
```

---

## **2. Criar o Dockerfile**

Crie um arquivo chamado `Dockerfile` na raiz do projeto com o seguinte conteúdo:

```dockerfile
# Use a imagem base oficial do Node.js
FROM node:lts AS base

# Configure o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instale o pnpm globalmente
RUN npm install -g pnpm

# Copie o arquivo de definição de dependências
COPY package.json pnpm-lock.yaml ./

# Instale as dependências em um estágio intermediário
FROM base AS dependencies
RUN pnpm install --frozen-lockfile

# Copie todos os arquivos do projeto
COPY . .

# Construa a aplicação
RUN pnpm build

# Configure o ambiente de produção
FROM base AS production
ENV NODE_ENV=production

# Copie apenas os arquivos necessários para o ambiente de produção
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/.next ./.next
COPY --from=dependencies /app/public ./public
COPY --from=dependencies /app/package.json ./package.json

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["pnpm", "start"]

```

---

## **3. Criar o .dockerignore**

Crie um arquivo chamado `.dockerignore` para excluir arquivos desnecessários do build Docker:

```plaintext
node_modules
npm-debug.log
pnpm-debug.log
.DS_Store
*.env.local
```

---

## **4. Build da Imagem Docker**

Navegue até a pasta do projeto no terminal e execute o seguinte comando para criar a imagem Docker:

```bash
docker build -t <nome-do-projeto> .
```

---

## **5. Rodar o Contêiner**

Execute o contêiner utilizando o seguinte comando:

```bash
docker run -p 3000:3000 <nome-do-projeto>
```

- O argumento `-p 3000:3000` mapeia a porta **3000** do contêiner para a porta **3000** do seu host local.
- Acesse a aplicação em: [http://localhost:3000](http://localhost:3000).

---

## **6. Configurar Docker Compose (Opcional)**

Se quiser simplificar ainda mais o gerenciamento, você pode usar o Docker Compose.

### Criar o arquivo `docker-compose.yml`:

Adicione o seguinte conteúdo:

```yaml
version: "3.8"

services:
  app:
    build:
      context: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    command: ["next", "dev"]
```

### Rodar o Contêiner com Docker Compose:

Use o comando:

```bash
docker-compose up
```

- Isso iniciará a aplicação em modo de desenvolvimento.

---

## **7. Ajustando para Produção**

Quando estiver pronto para a produção, edite o `docker-compose.yml`:

```yaml
version: "3.8"

services:
  app:
    build:
      context: .
    ports:
      - "3000:3000"
    command: ["next", "start", "--host", "0.0.0.0"]
```

E gere o build do Next.js antes de criar a imagem:

```bash
pnpm build
docker-compose up --build
```

---

## **8. Verificando Logs**

Se precisar verificar os logs do contêiner, use:

```bash
docker logs <container_id>
```

Você pode encontrar o `container_id` usando:

```bash
docker ps
```

---

Pronto! Agora você tem sua aplicação Next.js rodando em um ambiente Docker configurado com PNPM. 🚀
