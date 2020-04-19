const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express(); //instanciar aplicação

app.use(cors());
app.use(express.json()); //Antes de todas as requisições tornar JSON
app.use(routes);

app.listen(3333); //ouvir a porta
