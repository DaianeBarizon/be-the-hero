import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

//Link é usado para não renderizar a tela do toda
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" className="LogoHeroes" />
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
        <form action="">
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
