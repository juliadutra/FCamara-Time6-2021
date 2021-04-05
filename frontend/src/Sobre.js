import React from 'react'
import Cabecalho from './Cabecalho';
import './Sobre.css';
import Rodape from './Rodape';

export default function Sobre() {
    return (
      <div id="sobreNos">
        <Cabecalho/>
      {/* <h1>Sobre Nós</h1>*/}
    
      {/*Carousel*/}
      <section id="carouselSobreNos">
        <div id="carouselControle" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel" >
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselControle" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselControle" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselControle" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner text-center">      
            <div className="carousel-item active carousel-fundo1" data-bs-interval="6000"></div>
            <div className="carousel-item carousel-fundo2" data-bs-interval="6000"></div>        
            <div className="carousel-item carousel-fundo3" data-bs-interval="6000"></div>        
        </div>

        <a className="carousel-control-prev" data-bs-target="#carouselControle" data-bs-slide="prev">
          <i class="fas fa-angle-left fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" data-bs-target="#carouselControle" data-bs-slide="next">
          <i class="fas fa-angle-right fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section> 

      {/*Nossa história*/}
      <section id="historia">
        <div className="container text-center">
          <div className="row mt-4">
            <div className="col-md-12">
              <h1 className="display-4">Como tudo começou?</h1>
                <p className="lead pt-4 d-flex justify-content-center">
                  Tudo começou quando a Giovanna Santos viu uma mãe desesperada pois, a escola havia mandado a lista de materiais que precisava ser comprado, mas ela não tinha como comprar, pois estava desempregada e os “bicos” que tinha era apenas para as contas essenciais da casa e comprar comida. Giovanna se comoveu com a história, tentou encontrar uma ONG de confiança e que pudesse ajudar essa mãe, mas, os esforços forem em vão. Até que até que teve a ideia  de pedir ajuda para a comunidade onde viviam. E então, foi ela de casa em casa perguntando para as pessoas se poderiam ajudar com algum item escolar. Naquele dia Giovana conseguiu até mais do que precisava e descobriu que isso era um problema recorrente. Num certo dia, conversando com suas amigas Mayara Silva, Barbara Lima e Julia Dias, tiveram a idéia de tornar aquele pequeno movimento em algo maior, podendo alcançar não apenas a sua comunidade, mas diversas outras que sofrem do mesmo problema. Foi aí que nasceu a iniciativa PADRINHOS DO BEM.
                  Como toda criança que de costume é apadrinhada por alguém, poque não dar a oportunidade de uma pessoa apadrinhar não apenas uma criança, mas sim uma ideia. 
                  Hoje somos centenas de padrinhos, que abraçaram a ideia e estão conosco mudando não o mundo mas sim construindo um novo amanhã.
                </p>
            </div>                
        </div>
        </div>
      </section>

      {/*como estamos hoje*/}
      <section id="situacaoAtual">
        <div className="container-fluid">
          <div>
            <h1 className="display-4 text-center">Como estamos hoje !</h1>
            <p className="lead text-center">Parágrafo</p>
          </div>
          <div className="row">
            <div className="col-sm bg-roxo">
              <div className="d-flex justify-content-around text-center pt-4 pb-4">
                  <div className="me-2 text-amarelo">
                    <h4>250</h4>
                    <p className="lead">Crianças alcançadas</p>
                  </div>

                  <div className="me-2 text-amarelo">
                    <h4>100</h4>
                    <p className="lead">Parceiros</p>
                  </div>

                  <div className="me-2 text-amarelo">
                    <h4>150</h4>
                    <p className="lead">Kits arrecadados</p>
                  </div>
                
                  <div className="me-2 text-amarelo">
                    <h4>100</h4>
                    <p className="lead text-amarelo">Crianças esperando doação</p>
                  </div>

                  <div className="me-2 text-amarelo">
                    <h4>5</h4>
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

      {/*Footer*/}
      <Rodape />

    </div>
    );
  }