import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import Cabecalho from './Cabecalho';

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
            <div className="carousel-item active carousel-fundo1" data-bs-interval="5000">
                <div className="container">
                    <h1 className="display-4">Sobre Nós</h1>
                    <p className="lead">
                      Nossa história, nosso lema e manifesto.
                    </p>
                </div>
            </div>

            <div className="carousel-item carousel-fundo2" data-bs-interval="5000">
                <div className="container">
                    <h1 className="display-4">O Projeto</h1>
                    <p className="lead">
                      Como transformamos vidas e ajudamos na esperança de um futuro melhor.
                    </p>
                </div>
            </div>        

            <div className="carousel-item carousel-fundo3" data-bs-interval="5000">
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


    </div>

  );
}

export default App;
