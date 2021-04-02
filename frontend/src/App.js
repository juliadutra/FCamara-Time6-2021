import './App.css';
import {withRouter} from "react-router-dom";
import Cabecalho from './Cabecalho';
import fotoRosto from './Imagens/rosto.jpg';

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

  return (
    <div className="App">
      <Cabecalho/>
     {/*CAROUSEL*/}
    
     <section>
        <div id="carouselControle" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel" >
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
              <h2 className="display-6">Conheça mais sobre o projeto!</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </section>

    {/*Fazer parte do projeto*/}

    <section id="fazerParte" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-6">
              <div className="border border-dark rounded">
                <h3 className="display-6">Como Ajudar</h3>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button type="button" className="btn btn-outline-dark">Seja um Padrinho</button>
              </div>
          </div>
          <div className="col-md-6">
            <div className="border border-dark rounded">
              <h3 className="display-6">Receba Ajuda</h3>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <button type="button" className="btn btn-outline-dark">Receber Ajuda</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*Depoimentos - Pessoas que já ajudaram*/}
    <section id="pessoasAjudaram">
      <h3 className="display-6">Depoimentos de pessoas que já receberam ajuda</h3>

    <div id="carouselControle2" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselControle2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselControle2" data-bs-slide-to="1" aria-label="Slide 2"></button>       
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-4">                
              <div className="card" >              
                <img src={fotoRosto} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento 1"/>      
                <div className="card-body">
                  <p className="card-text lead">Parabéns pelo projeto! Estou muito contente de poder ajudar. Continuem alegrando cada coração dessas crianças e adolestentes.</p>
                  <cite>Fulano</cite>
                </div>
              </div>

              </div>
              <div className="col-md-4 d-none d-md-block">                
                <div className="card" >              
                  <img src={fotoRosto} className="icard-img-top mg-fluid" alt="Depoimento 2"/>          
                  <div className="card-body">
                    <p className="card-text lead">ONG com projeto mais inspirador não há! Estou impressionado pelo trabalho de vocês. Parabéns pela ação.</p>
                    <cite>Fulano</cite>
                  </div>
                </div>

              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="card" >              
                   <img src={fotoRosto} className="card-img-top img-fluid" alt="Depoimento 2"/>                
                    <div className="card-body">
                      <p className="card-text lead">Gratidão por poder contribuir para essa ONG. É muito gratificante saber que com pouco podemos ajudar alguém.</p>
                      <cite>Fulano</cite>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          
        <div className="container">
            <div className="row">
              <div className="col-md-4">                
              <div className="card" >              
                <img src={fotoRosto} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento 1"/>               
                <div className="card-body">
                  <p className="card-text lead">Meu filho se sensibilizou e pediu para doar alguns livros que não estava mais usando para tentar ajudar outras crianças. Parabéns pela iniciativa.</p>
                  <cite>Fulano</cite>
                </div>
              </div>

              </div>
              <div className="col-md-4 d-none d-md-block">                
                <div className="card" >              
                  <img src={fotoRosto} className="icard-img-top mg-fluid" alt="Depoimento 2"/>                 
                  <div className="card-body">
                    <p className="card-text lead">Esse projeto é um grande exemplo de inspiração para todo mundo! Gratidão por fazer parte.</p>
                    <cite>Fulano</cite>
                  </div>
                </div>

              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="card" >              
                   <img src={fotoRosto} className="card-img-top img-fluid" alt="Depoimento 2"/>     
                    <div className="card-body">
                      <p className="card-text lead">Estou muito feliz em poder ajudar esse projeto. Um projeto com pessoas dedicadas em fazer o bem!</p>
                      <cite>Fulano</cite>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
    
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControle2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselControle2" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </section>

    {/*Depoimentos - Pessoas que já ajudaram*/}
  <section id="pessoasAReceberam">
      <h3 className="display-6">Depoimentos de pessoas que já receberam ajuda</h3>
    <div id="carouselControle3" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselControle3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselControle3" data-bs-slide-to="1" aria-label="Slide 2"></button>       
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-4">                
              <div className="card" >              
                <img src={fotoRosto} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento 1"/>      
                <div className="card-body">
                  <p className="card-text lead">Parabéns pelo projeto! Estou muito contente de poder ajudar. Continuem alegrando cada coração dessas crianças e adolestentes.</p>
                  <cite>Fulano</cite>
                </div>
              </div>

              </div>
              <div className="col-md-4 d-none d-md-block">                
                <div className="card" >              
                  <img src={fotoRosto} className="icard-img-top mg-fluid" alt="Depoimento 2"/>          
                  <div className="card-body">
                    <p className="card-text lead">ONG com projeto mais inspirador não há! Estou impressionado pelo trabalho de vocês. Parabéns pela ação.</p>
                    <cite>Fulano</cite>
                  </div>
                </div>

              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="card" >              
                   <img src={fotoRosto} className="card-img-top img-fluid" alt="Depoimento 2"/>                
                    <div className="card-body">
                      <p className="card-text lead">Gratidão por poder contribuir para essa ONG. É muito gratificante saber que com pouco podemos ajudar alguém.</p>
                      <cite>Fulano</cite>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          
        <div className="container">
            <div className="row">
              <div className="col-md-4">                
              <div className="card" >              
                <img src={fotoRosto} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento 1"/>               
                <div className="card-body">
                  <p className="card-text lead">Parabéns pelo projeto! Estou muito contente de poder ajudar. Continuem alegrando cada coração dessas crianças e adolestentes.</p>
                  <cite>Fulano</cite>
                </div>
              </div>

              </div>
              <div className="col-md-4 d-none d-md-block">                
                <div className="card" >              
                  <img src={fotoRosto} className="icard-img-top mg-fluid" alt="Depoimento 2"/>                 
                  <div className="card-body">
                    <p className="card-text lead">ONG com projeto mais inspirador não há! Estou impressionado pelo trabalho de vocês. Parabéns pela ação.</p>
                    <cite>Fulano</cite>
                  </div>
                </div>

              </div>
              <div className="col-md-4 d-none d-md-block">
                <div className="card" >              
                   <img src={fotoRosto} className="card-img-top img-fluid" alt="Depoimento 2"/>     
                    <div className="card-body">
                      <p className="card-text lead">Gratidão por poder contribuir para essa ONG. É muito gratificante saber que com pouco podemos ajudar alguém.</p>
                      <cite>Fulano</cite>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
    
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselControle3" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselControle3" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    </section>


      {/*Depoimentos*/}
    {/*
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
      
    </section>*/}

    </div>
    

  );
}

export default withRouter(App);
