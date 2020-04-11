const express = require("express");

const app = express(); //instanciar aplicação

app.get("/", (request, response) => {
  //return response.send("Hello World!");
  return response.json({
    evento: "Semana OminiStack 11",
    aluno: "Daiane Barizon",
  });
}); //primeira rota

app.listen(3333); //ouvir a porta
