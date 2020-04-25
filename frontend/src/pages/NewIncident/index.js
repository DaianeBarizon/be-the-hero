import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

import api from "../../services/api";

//Link é usado para não renderizar a tela do toda
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = { title, description, value };
    try {
      const response = await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      console.log("api", response.data);
      history.push("/profile");
    } catch (err) {
      alert("erro", err);
    }
  }

  return (
    <div className="newIncident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            {" "}
            <FiArrowLeft size={16} color={"#e02041"} /> Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
