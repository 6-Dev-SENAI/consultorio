import React from "react";

import EstruturaPagina from "../../componentes/EstruturaPagina";
import Mapa from "../../componentes/Mapa";
import "./estilo_contato.css";
import ContatoDentistas from "../../componentes/Dentistas";

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">
            Horários de <b>atendimento</b>
          </h2>
          <p>
            Agende uma consulta pelo telefone: <b>(11) 5647 - 0007</b>
          </p>

          <ul className="lista-medicos">
            <ContatoDentistas
              img="/assets/medico01.png"
              nome="Dr. Hélio"
              dias={["Segundas", "Quartas", "Sextas"]}
              horarios={["09:00", "16:00"]}
            />
            <ContatoDentistas
              img="/assets/medico02.png"
              nome="Dr. Carlos"
              dias={["Terças", "Quintas"]}
              horarios={["13:00", "18:00"]}
            />
            <ContatoDentistas
              img="/assets/medico03.png"
              nome="Dra. Suzana"
              dias={["Terças", "Quintas", "Sábados"]}
              horarios={["08:00", "12:00"]}
            />
          </ul>
        </div>
        <div className="contato-mapa">
          <h2 className="titulo-sessao">
            Onde estamos <b>localizados</b>?
          </h2>
          <p>
            Rua Bento Branco de Andrade Filho, 379 - Santo Amaro, São Paulo - SP
          </p>
          <Mapa />
        </div>
      </div>
    </EstruturaPagina>
  );
};

export default Contato;
