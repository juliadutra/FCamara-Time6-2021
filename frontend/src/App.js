import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import Cabecalho from './Cabecalho';
import {foto1} from './Imagens/foto-carouse1.jpg'


function App() {
  return (
    <div className="App" id="home">
      {/*<h1>Programa de Formação FCamara 2021 - TIME 6</h1>*/}
      <Cabecalho/>
     {/*CAROUSEL*/}
    
     <section>
        <div id="carouselControle" className="carousel slide carousel-fade" data-bs-ride="carousel" >
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselControle" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselControle" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselControle" data-bs-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">      
            <div className="carousel-item active carousel-fundo1" data-bs-interval="6000">
                <div className="container">
                    <h1 className="display-4">Sobre Nós</h1>
                    <p className="lead">
                      Nossa história, nosso lema e manifesto.
                    </p>
                </div>
            </div>

            <div className="carousel-item carousel-fundo2" data-bs-interval="6000">
                <div className="container">
                    <h1 className="display-4">O Projeto</h1>
                    <p className="lead">
                      Como transformamos vidas e ajudamos na esperança de um futuro melhor.
                    </p>
                </div>
            </div>        

            <div className="carousel-item carousel-fundo3" data-bs-interval="6000">
                <div className="container">
                    <h1 className="display-4">Como Doar</h1>
                    <p className="lead">
                    Você pode ajudar a transformar a vida de diversas crianças. Junte-se a nós!
                    </p>
                </div>
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
    </section>


      {/*Depoimentos*/}
    
      <section id="depoimento" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <h2 className="display-4 pb-4">DEPOIMENTOS</h2>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ."</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Doador 1</cite>
              </figcaption>
            </figure>                        
          </div>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Doador 2</cite>
              </figcaption>
            </figure>         
          </div>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Doador 3</cite>
              </figcaption>
            </figure>         
          </div>
        </div>
      </div>
    </section>

    </div>
    

  );
}

export default App;
