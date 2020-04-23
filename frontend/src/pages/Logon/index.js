import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

//Link é usado para não renderizar a tela do toda
import { Link } from "react-router-dom";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="heroes" className="LogoHeroes" />
        <form action="" className="form">
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID"></input>
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            {" "}
            <FiLogIn size={16} color={"#e02041"} /> Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes" className="imgHeroes" />
    </div>
  );
}
