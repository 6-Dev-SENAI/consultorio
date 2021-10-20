import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";

import "./planos.css";

import Plano from "../../componentes/Plano";

export default function Planos() {
  return (
    <EstruturaPagina>
      <h2 className="titulo-missao">Nossos Planos</h2>
      <div className="planos">
        <Plano
          titulo="Dental Ideal DOC"
          subTitulo="Todas as idades"
          img="/assets/dentes-perfeitos.png"
          valorMensal="49,90"
          valorAnual="499,00"
          carenciaAnual="(Desconto + sem carência)"
        />
        <Plano
          titulo="Dental Júnior"
          subTitulo="8 a 17 anos de idade"
          img="/assets/joystick.png"
          valorMensal="27,99"
          valorAnual="279,90"
          carenciaAnual="(Desconto + carência Reduzida)"
        />
        <Plano
          titulo="Dente de Leite"
          subTitulo="0 a 7 anos de idade"
          img="/assets/bebe-chorando.png"
          valorMensal="23,99"
          valorAnual="239,90"
          carenciaAnual="(Desconto + carência Reduzida)"
        />
      </div>
    </EstruturaPagina>
  );
}
