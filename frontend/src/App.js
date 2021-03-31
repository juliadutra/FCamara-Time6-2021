import './App.css';
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import Cabecalho from './Cabecalho';


function App(props) {
  function redirecionarParaSobreNos() {
    props.history.push("/sobre-nos")
  }
  function redirecionaParaProjeto() {
    props.history.push("/projeto")
  }
  function redirecionaParaComoDoar() {
    props.history.push("/como-doar")
  }
  function redirecionaParaNomeIndefinido() {
    props.history.push("/nome-indefinido")
  }
  return (
    <div className="App">
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
            <div className="carousel-item active carousel-fundo1" data-bs-interval="6000" onClick={redirecionarParaSobreNos}>
                <div className="container">
                    <h1 className="display-4">Sobre Nós</h1>
                    <p className="lead">
                      Nossa história, nosso lema e manifesto.
                    </p>
                </div>
            </div>

            <div className="carousel-item carousel-fundo2" data-bs-interval="6000" onClick={redirecionaParaProjeto}>
                <div className="container">
                    <h1 className="display-4">O Projeto</h1>
                    <p className="lead">
                      Como transformamos vidas e ajudamos na esperança de um futuro melhor.
                    </p>
                </div>
            </div>        

            <div className="carousel-item carousel-fundo3" data-bs-interval="6000" onClick={redirecionaParaComoDoar}>
                <div className="container">
                    <h1 className="display-4">Como Doar</h1>
                    <p className="lead">
                    Você pode ajudar a transformar a vida de diversas crianças. Junte-se a nós!
                    </p>
                </div>
            </div>        
        </div>

        <a className="carousel-control-prev" data-bs-target="#carouselControle" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" data-bs-target="#carouselControle" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>
    
    {/*Conheça mais sobre o projeto*/}
    <section id="conhecaMais">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              vídeo
          </div>
          <div className="col-md-6">
              <h2 className="display-6">Conheça mais sobre o projeto</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </section>

    {/*Fazer parte do projeto*/}

    <section id="fazerParte" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md">
            <h2 className="display-4 pb-4">Cadastre-se para fazer parte do projeto</h2>
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button type="button" className="btn btn-outline-dark" onClick={redirecionaParaNomeIndefinido}>Sobre Nós</button>        
          </div>
        </div>
      </div>
    </section>


      {/*Depoimentos*/}
    
      <section id="depoimento" className="d-flex bg-light">
      <div className="container align-self-center">
        <div className="row">
          <h2 className="display-4 pb-4">DEPOIMENTOS</h2>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">"Parabéns pelo projeto!
                  Estou muito contente de poder ajudar. Continuem alegrando cada coração dessas crianças e adolestentes.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Luciana da Silva</cite>
              </figcaption>
            </figure>                        
          </div>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">
                  ONG com projeto mais inspirador não há! Estou impressionado pelo trabalho de vocês. Parabéns pela ação.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">José Carvalho</cite>
              </figcaption>
            </figure>         
          </div>
          <div className="col-md-4 secao-depoimento">
            <i className="fas fa-quote-left fa-3x"></i>
            <figure className="text-center pt-4">
              <blockquote className="blockquote">
                <p className="lead">
                  Gratidão por poder contribuir para essa ONG. É muito gratificante saber que com pouco podemos ajudar alguém.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Cibele Sousa</cite>
              </figcaption>
            </figure>         
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </section>

    </div>
    

  );
}

export default withRouter(App);
