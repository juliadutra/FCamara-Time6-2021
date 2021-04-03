import React from 'react'
import Cabecalho from './Cabecalho';
import './Sobre.css';
import Rodape from './Rodape';

export default function Sobre() {
    return (
      <div id="sobreNos">
        <Cabecalho/>
       {/* <h1>Sobre Nós</h1>*/}
    
      {/*Foto da capa*/}
      <section id="capaSobre">
      </section>     

      {/*Nossa história*/}
      <section id="historia">
        <div className="container text-center">
          <div className="row mt-4">
            <div className="col-md-12">
              <h1 className="display-4">Como tudo começou?</h1>
                <p className="lead pt-4 d-flex justify-content-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>                
        </div>
        </div>
      </section>

      {/*como estamos hoje*/}
      <section id="situacaoAtual" className="bg-light">
        <div className="container-fluid">
          <h1 className="display-4 text-center">Como estamos hoje ?</h1>
          <div className="row">
            <div className="col-sm">
              <div className="d-flex justify-content-around text-center">
                <div className="me-2">
                  <h4>250</h4>
                  <p className="lead">Crianças alcançadas</p>
                </div>

                <div className="me-2">
                  <h4>250</h4>
                  <p className="lead">Parceiros</p>
                </div>

                <div className="me-2">
                  <h4>250</h4>
                  <p className="lead">Kits arrecadados</p>
                </div>
              
                <div className="me-2">
                  <h4>250</h4>
                  <p className="lead">Crianças esperando doação</p>
                </div>

                <div className="me-2">
                  <h4>250</h4>
                  <p className="lead">Estados alcançados</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/*missão, visão e valores */}
      <section id="lema" className="text-center">
        <h1 className="display-4">Nosso lema</h1>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <h3 className="text-center">Missão</h3>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card">
              <h3 className="text-center">Visão</h3>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card">
              <h3 className="text-center">Valores</h3>
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*Rodapé*/}
      <Rodape />

    </div>
    );
  }