import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

//Link é usado para não renderizar a tela do toda
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

//Tirar o padrão do formulário de regarregar a tela e.preventDefault()
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  //serve para fazer a navegação através de uma função javaScript
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("ongs", data);
      alert(`Sei ID de acesso : ${response.data.id}`);
      //Enviando/redirecionamento para a rota raiz
      history.push("/");
    } catch (err) {
      alert("erro", err);
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuse pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            {" "}
            <FiArrowLeft size={16} color={"#e02041"} /> Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
