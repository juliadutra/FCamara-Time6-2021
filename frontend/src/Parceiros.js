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

        <section>
          <h1 className="display-6 pt-4 text-center">Alguns de nossos parceiros</h1>

          <div className="container pt-4">
            <div className="row">
              <div className="col-md-6">
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
              </div>
              <div id="fundoParceria" className="col-md-6">
                imagem logo         
              </div>
            </div>
          </div>
        </section>

        <section id="tonarParceiro" className="d-flex">
          <div className="container align-self-center">
            <div className="row">
              <div className="col-md">
                  <h1 className="display-6 pt-4 text-center pb-4">Seja um parceiro você também</h1>
          
                <div class="d-grid gap-2 d-flex justify-content-center">
                  <button class="btn btn-outline-dark" type="button">Quero me tornar um parceiro</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }