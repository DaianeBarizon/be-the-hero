const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG ", () => {
  //Como pode demorar um pouco para executar
  //O código abaixo só vai executar depois das migrations acontecerem
  //Garantir um código síncrono
  beforeEach(async () => {
    await connection.migrate.rollback(); //Zerar o banco de dados
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG ", async () => {
    const response = await request(app).post("/ongs").send({
      name: "APAD17",
      email: "daianebarizon22@gamil.com",
      whatsapp: "21992867134",
      city: "Rio de Janeiro",
      uf: "RJ",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
