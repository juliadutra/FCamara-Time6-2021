import React from 'react'
import Cabecalho from './Cabecalho';
import './Parceiros.css';
import { Link } from "react-router-dom";
import foto1 from './Imagens/parceiro1.jpg';
import foto2 from './Imagens/parceiro2.jpg';
import foto3 from './Imagens/parceiro3.png';
import foto4 from './Imagens/parceiro4.jpg';
import foto5 from './Imagens/parceiro5.png';
import foto6 from './Imagens/parceiro6.jpeg';
import foto7 from './Imagens/parceiro7.jpg';
import foto8 from './Imagens/parceiro8.jpg';
import foto9 from './Imagens/parceiro9.jpg';
import Rodape from './Rodape';

export default function Parceiros() {
    return (
      <div id="parceiros">
        <Cabecalho/>
        {/*<h1>Parceiros</h1>*/}

        <section id="secaoParceiros">
        <div className="container pt-4">
          <h1 className="display-6 pt-4 text-center">Entenda como funciona nossa parceria</h1>
          <h2 className="display-6 text-start">Como funciona a nossa Parceria</h2>          
            <div className="row">
              <div className="col-md-12">
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <Link to="/validar-doacao">
                    Sou parceiro e quero validar uma doação
                  </Link>
              </div>
              
            </div>
          </div>
        </section>

        <section id="secaoImagensParceiros">
          <h1 className="display-6 pt-4 text-center">Alguns de nossos parceiros</h1>

          <div id="controleSlideParceiros" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#controleSlideParceiros" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#controleSlideParceiros" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#controleSlideParceiros" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                
                <div className="container text-center">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={foto1} height="230" width="200" alt="Mundo da Papelaria"/>
                    </div>

                    <div className="col-md-4">
                      <img src={foto2} height="230" width="200" alt="Papelaria Brasilia Brinquedos"/>
                    </div>

                    <div className="col-md-4">
                      <img src={foto3} height="230" width="200" alt="Papelaria Jambo"/>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                
                <div className="container text-center">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={foto4} height="230" width="230" alt="Arco - Íris Bazar e Livraria"/>
                      </div>

                      <div className="col-md-4">
                        <img src={foto5} height="230" width="230" alt="Fun - Papelaria Divertida"/>
                      </div>

                      <div className="col-md-4">
                        <img src={foto6} height="230" width="230" alt="Carinho em Papel - Papelaria Personalizada &amp; Arte Digital"/>
                      </div>
                    </div>
                  </div>

              </div>

              <div class="carousel-item" data-bs-interval="2000">
                
                <div className="container text-center">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={foto7} height="230" width="230" alt="Multipel - Bazer &amp; Papelaria"/>
                      </div>

                      <div className="col-md-4">
                        <img src={foto8} height="230" width="230" alt="Martins Fontes"/>
                      </div>

                      <div className="col-md-4">
                        <img src={foto9} height="230" width="230" alt="Real - Papelaria e Livraria"/>
                      </div>
                    </div>
                  </div>

              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#controleSlideParceiros" data-bs-slide="prev">
              <i class="fas fa-angle-left fa-3x" aria-hidden="true"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#controleSlideParceiros" data-bs-slide="next">
              <i class="fas fa-angle-right fa-3x" aria-hidden="true"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/*Tornar Parceiro*/}
        <section id="tonarParceiro" className="d-flex text-center">
          <div className="container align-self-center">
            <div className="row">
              <div className="col-md-12">
                  <h1 className="display-6 pt-4 pb-4">Seja um parceiro você também!</h1>                  
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                <div class="d-grid gap-2 d-flex justify-content-center">
                  <button type="button">Quero me tornar um parceiro</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Footer*/}
        <Rodape />

      </div>
    );
  }