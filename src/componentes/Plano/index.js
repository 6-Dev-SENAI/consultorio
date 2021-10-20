import React from "react";

import "./plano.css";

export default function Plano(props) {
  return (
    <div className="plano-container">
      <div className="plano-titulos">
        <h3>{props.titulo}</h3>
        <h4>{props.subTitulo}</h4>
      </div>
      <div className="plano-img-container">
        <img src={props.img} alt={props.titulo} />
      </div>
      <div className="plano-valores">
        <div className="plano-valor-mensal">
          <p>Mensal</p>
          <p>
            <small>R$</small> {props.valorMensal}
          </p>
        </div>
        <div className="plano-valor-anual">
          <p>Anual</p>
          <p>
            <small>R$</small> {props.valorAnual}
          </p>
          <p>{props.carenciaAnual}</p>
        </div>
      </div>
      <div className="plano-links">
        <p>Saiba mais</p>
        <button className="plano-btn">Contratar</button>
      </div>
    </div>
  );
}
