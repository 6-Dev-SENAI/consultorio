import React from "react";

const ContatoDentista = () => {
  return (
    <div className="contato-mapa">
      <h2 className="titulo-sessao">
        Horários de <b>atendimento</b>
      </h2>
      <p>
        Agende uma consulta pelo telefone: <b>(11) 5647 - 0007</b>
      </p>

      <ul className="lista-medicos">
        <li>
          <img
            src="assets/medico01.png"
            className="img-aparelho"
            alt="Dr. Hélio"
            title="Dr. Hélio"
          />
          <p>Dr. Hélio</p>
          <p>
            <b>Segundas</b>, <b>quartas</b> e <b>sextas</b> das{" "}
            <b>09:00 às 16:00</b>
          </p>
        </li>

        <li>
          <img
            src="assets/medico02.png"
            className="img-aparelho"
            alt="Dr. Carlos"
            title="Dr. Carlos"
          />
          <p>Dr. Carlos</p>
          <p>
            <b>Terças</b> e <b>quintas</b> das <b>13:00 às 18:00</b>
          </p>
        </li>

        <li>
          <img
            src="assets/medico03.png"
            className="img-aparelho"
            alt="Dra. Suzana"
            title="Dra. Suzana"
          />
          <p>Dra. Suzana</p>
          <p>
            <b>Terças</b> e <b>quintas</b> e <b>sábado</b> das{" "}
            <b>08:00 às 12:00</b>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContatoDentista;
