import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<h1>Programa de Formação FCamara 2021 - TIME 6</h1>*/}

      {/*MENU*/}
      <header> 
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a href="#" className="navbar-brand">
              <h1>Logo</h1>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="nav-principal" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/projeto">O Projeto</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/como-doar">Como Doar</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/parceiros">Parceiros</Link></li> 
                <li className="nav-item"><Link className="nav-link" to="/fale-conosco">Fale Conosco</Link></li>                         
              </ul>
            </div>
          </div>
        </nav>            
      </header>  

      {/*CAROUSEL*/}
      <section id="secaoCarousel">
        <div>
          <div className="row">
              <div className="col-xl-12 m-auto">
                  <div id="carouselControle" class="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselControle" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselControle" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselControle" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                                           
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="Imagens/foto-carousel.jpg" className="d-block w-100"/>
                            <div className="carousel-caption">
                              <h5 className="display-4">First slide label</h5>
                              <p className="lead">Some representative placeholder content for the first slide.</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src="Imagens/foto-carousel.jpg" className="d-block w-100"/>
                            <div className="carousel-caption">
                              <h5 className="display-4">Second slide label</h5>
                              <p className="lead">Some representative placeholder content for the second slide.</p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img src="Imagens/foto-carousel.jpg" className="d-block w-100"/>
                            <div className="carousel-caption">
                              <h5 className="display-4">Third slide label</h5>
                              <p className="lead">Some representative placeholder content for the third slide.</p>
                            </div>
                          </div>
                        </div>
                     
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControle" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselControle" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
              </div>
          </div>
        </div>
      </section> 
    </div>

  );
}

export default App;
