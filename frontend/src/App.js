import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Programa de Formação FCamara 2021 - TIME 6</h1>

      {/*MENU*/}
      <header> 
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container">
            <a href="#" class="navbar-brand">
              <h1>Logo</h1>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="nav-principal" class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
                <li class="nav-item"><Link className="nav-link" to="/projeto">O Projeto</Link></li>
                <li class="nav-item"><Link className="nav-link" to="/como-doar">Como Doar</Link></li>
                <li class="nav-item"><Link className="nav-link" to="/parceiros">Parceiros</Link></li> 
                <li class="nav-item"><Link className="nav-link" to="/fale-conosco">Fale Conosco</Link></li>                         
              </ul>
            </div>
          </div>
        </nav>            
      </header>  
    </div>
  );
}

export default App;
