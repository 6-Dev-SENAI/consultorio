import React from "react";

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';
import './estilo_contato.css';
import ContatoDentistas from '../../componentes/Dentistas';

const Contato = () => {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <ContatoDentistas/>
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>Rua Bento Branco de Andrade Filho, 379 - Santo Amaro, São Paulo - SP</p>
                    <Mapa />
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Contato;