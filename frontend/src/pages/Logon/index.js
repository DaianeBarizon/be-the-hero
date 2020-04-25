import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

//Link é usado para não renderizar a tela do toda
import { Link, useHistory } from "react-router-dom";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    //evitar o redirect
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      //para ter salvo em toda a aplicacao
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
      console.log(response.data.name);
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            {" "}
            <FiLogIn size={16} color={"#e02041"} /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes" />
    </div>
  );
}
