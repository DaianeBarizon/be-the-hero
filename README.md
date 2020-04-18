<!-- então bora codar! -->

<h1 align="center">
    <img alt="" title="" src="image/logo.svg">
</h1>

<h3 align="center"> Aplicação para conectar ONGs e outras instituições a pessoas que tem disponibilidade para ajudar </h3>

<h3 align="center"> Criada com a stack <img src="image/react.png" alt="react" height="18"> React, <img src="image/react-native.png" alt="react-native" height="18"> React Native, <img src="image/node.png" alt="node" height="18"> Node e <img src="image/sqlite.png" alt="node" height="18"> SQLite </h3>

<p align="center"> <img src="image/heroes.png" alt="heroes" height="250"> </p>

<p align="center"> Usando o poder de uma stack poderosa, que utiliza de uma única linguagem popular e moderna, o <img src="image/js.png" height="18" alt="javascript"> JavaScript. <br> Produtividade e performance de forma enxuta. </p>

---

A 11ª edição da Semana OmniStack, ocorrida entre 23/03 e 29/03, trouxe como projeto uma aplicação web e mobile inédita. Um sistema para conectar pessoas dispostas a ajudar a ONGs que precisam dessa ajuda.

Em uma semana foi desenvolvida uma aplicação do zero, dominando o backend, frontend e o mobile com uma única linguagem e uma única biblioteca de interfaces.

[Layout](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=0%3A1) da aplicação no <img src="image/figma.png" alt="figma" height="20"> Figma.

### Primeiro dia

1. Apresentar aplicação
2. Configurar ambiente de desenvolvimento
   - Node.js & NPM
   - Visual Studio Code
3. Endenter sobre back-end & front-end
   ### Back-end
   - Regras de Negócio;
   - Conexão banco de dados;
   - Envio de e-mail;
   - Comunicação com webservices;
   - Autenticação do usuário;
   - Criptografia e segurança;
4. Criar projeto com Node.js
   - `npm install -y`
   - `npm install express`
5. Entender sobre React & SPA
6. Criar projeto com ReactJS
   - `npx create-react-app frontend`
7. Entender sobre React Native & Expo (configurei a máquina e utilizei o próprio celular para rodar)
   - `react-native init mobile`

### Segundo dia

1. Node.js & Express
   - Rotas e recursos
   - Métodos HTTP
     - **Get** Buscar informação no back-end
     - **Post** Criar informação no back-end
     - **Put** Alterar uma informação no back-end
     - **Delete** Deletar uma informação no back-end
   - Tipos de parâmetros
     - **Query Params** Parâmetros nomeados enviados na rota após '?' (Filtros, Navegação)
     - **Route Params** Parâmetros utilizados para identificar recursos
     - **Request Body** Corpo da requisição, utilizado para criar ou alterar recursos
2. Utilizando o Insomnia
   - Testar rotas com outros métodos
3. Configurando Nodemon
4. Diferenças entre bancos de dados
   - **SQL** MySql, SQLite <img src="image/sqlite.png" alt="node" height="18">, PostgreSQL, Oracle, Microsoft SQL Server (Com relacionamento) `npm i sqlite3`
   - **NoSQL** MongoDB, CouchDB (Sem relacionamento)
5. Configurando banco de dados
   - Fazer a comunicação com o banco
   - **Driver** select \* from users
   - **Query Builder** table('users').select('\*').where(). Knex.js: `npm i knex`
6. Pensando nas entidades e funcionalidades
   - Se basear no layout
   ### Entidades
   - Tudo aquilo que vai ser salvo no banco de dados
     - Ong
     - Caso (Incidents)
   ### Entidades
   - Login
   - Cadastro
   - Logout
   - Cadastrar novos casos
   - Deletar casos
   - Listar todos os casos
   - Listar um caso específico
   - Entrar em contato com a ONG
   ### Migrations
   - Histórico do banco de dados
   - Facilitador de trabalho
     `npx knex migrate:make create_ongs`
     `npx knex migrate:latest`
7. Construção do back-end
8. Adicionando módulo CORS
9. Enviando back-end ao Github

## Para rodar a aplicação

> OBS: pode-se utilizar o gerenciador de pacotes npm ou o yarn para rodar os comandos abaixo

Execute `npm install` ou `yarn install` nas pastas backend, frontend e mobile, para instalar as dependências.

Rode `npm start` na pasta backend e acesse **localhost:3333**.

Rode `npm start` na pasta frontend para utilizar a versão web. Acesse via **localhost:3000**.

Para este projeto rode `react-native run-android` ou `react-native run-ios` na pasta mobile. Se caso aparecer erros, antes de rodar o 'Welcome to React', tente `npm android-clean` ou `yarn android-clean`.

## Telas

<p align="center">
    <img alt="web" title="web" src="image/print1.png">
    <img alt="web" title="web" src="image/print2.png">
    <img alt="web" title="web" src="image/print3.png">
    <img alt="web" title="web" src="image/print4.png">
    <img alt="mobile" title="mobile" src="image/print5.png">
    <img alt="mobile" title="mobile" src="image/print6.png">
    <img alt="mobile" title="mobile" src="image/print7.png">
    <img alt="mobile" title="mobile" src="image/print8.png">
    <img alt="mobile" title="mobile" src="image/print9.png">
    <img alt="insomnia" title="insomnia" src="image/print-insomnia.png">
</p>

Veja também esse [vídeo](https://youtu.be/UygqW2eBJJA) com a demonstração das versões web e mobile rodando localmente.
