import React from 'react'
import Cabecalho from './Cabecalho';
import './Parceiros.css';
import foto1 from './Imagens/parceria1.jpg';

export default function Parceiros() {
    return (
      <div id="parceiros">
        <Cabecalho/>
        {/*<h1>Parceiros</h1>*/}

        <section id="secaoParceiros">
          <h1 className="display-6 pt-4 text-center">Entenda como funciona nossa parceria</h1>

          <div className="container pt-4">
            <div className="row">
              <div className="col-md-6">
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
              </div>
              <div id="fundoParceria" className="col-md-6">
                <img src={foto1} className="img-fluid" />                  
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }