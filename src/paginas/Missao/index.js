import React from "react";
import "./missao.css";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import Objetivo from "../../componentes/Objetivo";

export default function Missao() {
  return (
    <EstruturaPagina>
      <h2 className="titulo-missao">Missão</h2>
      <div className="missao-intro">
        <p>
          A clínica Odontológica vem revolucionando a odontologia brasileira,
          oferecendo acesso à saúde bucal ao maior número de pessoas possível.
          Por meio de atendimento de qualidade, proporciona ao público todos os
          serviços de odontologia desde pediatria á geriatria.
        </p>
        <p>
          O paciente Sorridents poderá realizar seus tratamentos em um único
          local, com segurança, conforto e conveniência.
        </p>
      </div>
      <div className="objetivos">
        <Objetivo img="/assets/foco.png" title="FOCO">
          <p>
            Atender pessoas que buscam um profissional atencioso para a solução
            de um problema bucal em uma clínica multidisciplinar.
          </p>
        </Objetivo>
        <Objetivo img="/assets/missao.png" title="MISSÃO">
          <p>
            Propiciar acesso a uma odontologia moderna com conforto,
            conveniência e qualidade, sempre com compromisso social.
          </p>
        </Objetivo>
        <Objetivo img="/assets/visao.png" title="VISÃO">
          <p>
            Continuar a ser a referência nacional em atendimento odontológico de
            qualidade; manter o reconhecimento de sua excelência no atendimento
            ao cliente, e ser, cada vez mais, recomendada como negócio pela
            satisfação de seus franqueados.
          </p>
        </Objetivo>
        <Objetivo img="/assets/valores.png" title="VALORES">
          <p>
            A grande paixão da Sorridents é cuidar da saúde bucal das pessoas,
            por este motivo realiza um atendimento alegre e humanizado. De um
            jeito simples, mantém uma relação de respeito e transparência com
            seus clientes.
          </p>
        </Objetivo>
      </div>
    </EstruturaPagina>
  );
}
