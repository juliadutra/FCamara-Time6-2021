import React from 'react'
import Cabecalho from './Cabecalho';
import './FaleConosco.css';

export default function FaleConosco() {
    return (
      <div id="faleconosco">
        <Cabecalho/>
        {/*<h1>Fale Conosco</h1>*/}
          

        {/*Capa*/}
        <section id="capaFaleConosco">
          <div className="container">
            <h1 className="display-4 text-center">FALE CONOSCO</h1>
          </div>
        </section>


        {/*Texto e formulário*/}
        <section id="secaoFaleConosco">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                form
              </div>
              <div className="col-md-6">
                texto
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }