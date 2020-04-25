import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

import api from "../../services/api";
//Link é usado para não renderizar a tela do toda
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIndicidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIndicidents(response.data);
        console.log(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIndicidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar um caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span className="span">Bem vinda, {ongName}</span>
        <Link className="button" to="/newIncident">
          Cadastrar um novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color={"#e02041"} />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li Key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>
            <strong>Descrição:</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </p>
            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color={"#a8a8b3"} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
