## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Seed DB

Execute `npx prisma db seed`.
obs. Deleta tudo na DB primeiro.

## Executar tudo no Docker

```bash
docker-compose up --build
```

ou `npm run` algum dos script docker.

## Executar somente DB no docker, e restante local (para facilitar desenvolvimento)

1 - Subir DB

```bash
docker-compose up -d database
```

obs. recomendo `docker-compose up down` primeiro.

2 - Mudar "DATABASE_URL" para a segunda opção no arquivo `.env`.

3 - Subir API

```bash
npm run start:watch
```

obs. hot reload.

## Instruções para Jeniffer

<!--  database:
    image: postgres
    restart: always
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ecoroute
    networks:
      - ecoroute-network
 -->

1. Instalar dependências. `npm install`.

2. Criar um banco postgresql.

- Database: ecoroute
- User: postgres
- Password: postgres
- Port: 5432

3. Iniciar o banco de dados.

4. Executar o comando `npx prisma generate`.

5. Executar o comando `npm run start`.

6. Executar o comando `npx prisma db seed`.
