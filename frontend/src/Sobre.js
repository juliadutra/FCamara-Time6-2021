import React from 'react'
import Cabecalho from './Cabecalho';
import './Sobre.css';


export default function Sobre() {
    return (
      <div id="sobreNos">
        <Cabecalho/>
       {/* <h1>Sobre Nós</h1>*/}

        {/*Nossa história*/}
  <section id="historia">
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1 className="display-6">Como tudo começou?</h1>
            <p className="lead pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
        </div>
        {/*Carousel*/}
        <div className="col-md-8">
          <div id="carouselControle" className="carousel slide carousel-fade" data-bs-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselControle" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselControle" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselControle" data-bs-slide-to="2"></li>
            </ol>

          <div className="carousel-inner">      
            <div className="carousel-item active carousel-fundo1" data-bs-interval="6000">
              
            </div>

            <div className="carousel-item carousel-fundo2" data-bs-interval="6000">
                
            </div>        

            <div className="carousel-item carousel-fundo3" data-bs-interval="6000">
              
            </div>        
          </div>

          <a class="carousel-control-prev" data-bs-target="#carouselControle" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>

          <a class="carousel-control-next" data-bs-target="#carouselControle" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
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
            <div className="pe-2">
              <h3>250</h3>
              <p className="lead">Crianças alcançadas</p>
            </div>

            <div className="pe-2">
              <h3>250</h3>
              <p className="lead">Parceiros</p>
            </div>

            <div className="pe-2">
              <h3>250</h3>
              <p className="lead">Kits arrecadados</p>
            </div>
          
            <div className="pe-2">
              <h3>250</h3>
              <p className="lead">Crianças esperando doação</p>
            </div>

            <div className="pe-2">
              <h3>250</h3>
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



</div>
    );
  }