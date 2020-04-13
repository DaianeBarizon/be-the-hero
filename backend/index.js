const express = require("express");

const app = express(); //instanciar aplicação

app.use(express.json()); //Antes de todas as requisições tornar JSON

app.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    evento: "Semana OminiStack 11",
    aluno: "Daiane Barizon",
  });
}); //primeira rota

app.listen(3333); //ouvir a porta
