import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Programa de Formação FCamara 2021 - TIME 6</h1>

      {/*MENU*/}
      <header> 
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <a href="#" class="navbar-brand">
              <h1>Logo</h1>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="nav-principal" class="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#">Sobre Nós</a></li>
                <li class="nav-item"><a class="nav-link" href="#">O Projeto</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Como Ajudar</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Parcerias</a></li> 
                <li class="nav-item"><a class="nav-link" href="#">Fale Conosco</a></li>                         
              </ul>
            </div>
          </div>
        </nav>            
      </header>  
    </div>
  );
}

export default App;
