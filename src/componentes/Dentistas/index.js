import React from "react";

const ContatoDentista = (props) => {
  const {
    img,
    nome,
    dias,
    horarios
  } = props

  let diasTrabalhados = dias.join(" e ")
  let horariosTrabalhados = horarios.join(" às ")

  return (
    <li>
      <img src={img} className="img-aparelho" alt={nome} title={nome} />
      <p>{nome}</p>
      <p>
        <b>{diasTrabalhados}</b> das <b>{horariosTrabalhados}</b>
      </p>
    </li>
  );
};

export default ContatoDentista;
