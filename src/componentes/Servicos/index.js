import React from "react";

const ServicosPrestados = (props) => {
  const { texto } = props
  return (
    <li>
      <img src="assets/dente.png" alt="logo" title="logo" />
      <p>{texto}</p>
    </li>
  );
};

export default ServicosPrestados;
