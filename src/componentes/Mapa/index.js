import React from "react";

const ContatoMapa = () => {
  return (
    <div className="contato-rota">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14619.119726063862!2d-46.7217358!3d-23.648051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e9f3a76e1ebfb69!2sEscola%20SENAI%20Su%C3%AD%C3%A7o-Brasileira%20Paulo%20Ernesto%20Tolle!5e0!3m2!1spt-BR!2sbr!4v1634683180806!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        styles="border:0;"
        loading="lazy"
        title="Mapa"
      ></iframe>
    </div>
  );
};

export default ContatoMapa;
