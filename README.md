# ProjetoCRUD Usuários

Este projeto foi feito utilizando NextJS/React no frontend e NestJS no backend + MySQL como banco de dados e interface ORM (TypeORM) para acesso no backend.
Turbo foi utilizado para facilitar o gerenciamento e execução dos dois projetos simultaneamente.

## Instalando o projeto

Execute os seguintes comandos:

1. Instalação das dependências

```sh
npm i
```

2. Copiando o .env.dist para .env

```sh
cp ./apps/backend/.env.dist ./apps/backend/.env
```

## Executando o projeto

1. Inicialização do container do SQL Server

```sh
docker-compose up -d
```

2. Migração dos dados iniciais para a base de dados

```sh
npm --prefix ./apps/backend npm run build | npx typeorm migration:run -d ./apps/backend/dist/shared/database/typeorm/data-source.js
```

3. E, finalmente, execute o projeto

```sh
npm run dev
```