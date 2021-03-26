import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App" id="home">
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
              <ul className="navbar-nav ms-auto" id="navegacao">
                <li className="home nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
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
                    <h1 className="display-4">Slide 1</h1>
                    <p className="lead">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            <div className="carousel-item carousel-fundo2" data-bs-interval="5000">
                <div className="container">
                    <h1 className="display-4">Slide 2</h1>
                    <p className="lead">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>        

            <div className="carousel-item carousel-fundo3" data-bs-interval="5000">
                <div className="container">
                    <h1 className="display-4">Slide 3</h1>
                    <p className="lead">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
