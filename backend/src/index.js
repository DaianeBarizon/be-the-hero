const express = require("express");
const cors = require("cors");
const { errors } = require('celebrate');
const routes = require("./routes");

const app = express(); //instanciar aplicação

app.use(cors());
app.use(express.json()); //Antes de todas as requisições tornar JSON
app.use(routes);
app.use(errors());

app.listen(3333); //ouvir a porta
