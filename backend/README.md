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
   ### Funcionalidades
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
     <br>
     `npx knex migrate:make create_ongs`
     <br>
     `npx knex migrate:latest`
7. Construção do back-end
8. Adicionando módulo CORS
9. Enviando back-end ao Github
