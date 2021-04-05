import './App.css';
import {withRouter} from "react-router-dom";
import Cabecalho from './Cabecalho';
import fotoRosto from './Imagens/rosto.jpg';
import fotoRosto2 from './Imagens/rosto2.jpg';
import fotoRosto3 from './Imagens/rosto3.jpg';
import fotoRosto4 from './Imagens/rosto4.jpg';
import fotoRosto5 from './Imagens/rosto5.jpg';
import fotoRosto6 from './Imagens/rosto6.jpg';
import fotoRosto7 from './Imagens/rosto7.jpg';
import fotoRosto8 from './Imagens/rosto8.jpg';
import fotoRosto9 from './Imagens/rosto9.jpg';
import fotoRosto10 from './Imagens/rosto10.jpg';
import fotoRosto11 from './Imagens/rosto11.jpg';
import fotoRosto12 from './Imagens/rosto12.jpg';
import VideoPlayer from 'react-video-js-player';
import video1 from './Vídeos/video.mp4';
import Rodape from './Rodape';

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

  function redirecionaParaSejaPadrinho() {
    props.history.push("/seja-padrinho")
  }

  function redirecionaParaReceberAjuda() {
    props.history.push("/pedido-doacao")
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
          <i class="fas fa-angle-left fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" data-bs-target="#carouselControle" data-bs-slide="next">
          <i class="fas fa-angle-right fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>
    
    {/*Conheça mais sobre o projeto*/}
    <section id="conhecaMais">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="video" className="d-flex align-self-center">
              <VideoPlayer src={video1} widht="230" height="230" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="display-6">Conheça mais sobre o projeto!</h2>
            <p className="lead">Os Padrinhos do Bem decidiram conferir transparência, rapidez e segurança ao caminho que leva os materiais escolares dos doadores até às nossas crianças.</p>
          </div>
        </div>
      </div>
    </section>

    {/*Fazer parte do projeto*/}

    <section id="fazerParte" className="d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-md-6">
            <div className="borda-roxa">
              <h3 className="display-6">Como Ajudar</h3>
              <p className="lead">
                Junto de nossos parceiros, escolha uma opção de kit mais adequada à faixa etária da criança ou escolha um valor que está ao seu alcance. 
              </p>
              <button type="button" onClick={redirecionaParaSejaPadrinho}>Seja um Padrinho</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="borda-roxa">
              <h3 className="display-6">Receba Ajuda</h3>
              <p className="lead">
                Para receber uma doação através de nossa plataforma, cadastre-se preenchendo o formulário com os dados do seu filho, ou procure nossas ONG's ou nossos outros parceiros.
              </p>
              <button type="button" onClick={redirecionaParaReceberAjuda}>Receber Ajuda</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*Depoimentos - Pessoas que já ajudaram*/}
    <section id="pessoasAjudaram">
      <h3 className="display-6">Depoimentos de pessoas que já ajudaram</h3>

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
                <img src={fotoRosto} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento - Ana Fonseca"/>      
                  <div className="card-body">
                    <p className="card-text lead">Parabéns pelo projeto! Estou muito contente de poder ajudar. Continuem alegrando cada coração dessas crianças e adolestentes.</p>
                    <cite>Ana Fonseca</cite>
                  </div>
                </div>
                </div>
                <div className="col-md-4 d-none d-md-block">                
                  <div className="card" >              
                    <img src={fotoRosto2} className="card-img-top img-fluid" alt="Depoimento - Isabele Lima"/>          
                    <div className="card-body">
                      <p className="card-text lead">ONG com projeto mais inspirador não há! Estou impressionada pelo trabalho de vocês. Parabéns pela ação.</p>
                      <cite>Isabele Lima</cite>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <div className="card" >              
                      <img src={fotoRosto3} className="card-img-top img-fluid" alt="Depoimento - João Nascimento"/>                
                      <div className="card-body">
                        <p className="card-text lead">Gratidão por poder contribuir para essa ONG. É muito gratificante saber que com pouco podemos ajudar alguém.</p>
                        <cite>João Nascimento</cite>
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
                  <img src={fotoRosto4} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento - Milena Silva"/>               
                  <div className="card-body">
                    <p className="card-text lead">Meu filho se sensibilizou e pediu para doar alguns livros que não estava mais usando para tentar ajudar outras crianças. Parabéns pela iniciativa.</p>
                    <cite>Milena Silva</cite>
                  </div>
                </div>
                </div>
                <div className="col-md-4 d-none d-md-block">                
                  <div className="card" >              
                    <img src={fotoRosto5} className="card-img-top img-fluid" alt="Depoimento - Luisa Teixeira"/>                 
                    <div className="card-body">
                      <p className="card-text lead">Esse projeto é um grande exemplo de inspiração para todo mundo! Gratidão por fazer parte.</p>
                      <cite>Luisa Teixeira</cite>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <div className="card" >              
                    <img src={fotoRosto6} className="card-img-top img-fluid" alt="Depoimento - Monique Aguiar"/>                      
                      <div className="card-body">
                        <p className="card-text lead">Estou muito feliz em poder ajudar esse projeto. Um projeto com pessoas dedicadas em fazer o bem!</p>
                        <cite>Monique Aguiar</cite>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <button className="carousel-control-prev corSlider" type="button" data-bs-target="#carouselControle2" data-bs-slide="prev">
          <i class="fas fa-angle-left fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next corSlider" type="button" data-bs-target="#carouselControle2" data-bs-slide="next">
          <i class="fas fa-angle-right fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    {/*Depoimentos - Pessoas que receberam ajuda*/}
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
                  <img src={fotoRosto7} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento - Gabriela Gomes"/>      
                  <div className="card-body">
                    <p className="card-text lead">Graças a este projeto meus filhos conseguiram o material escolar que faltava. Muito obrigada.</p>
                    <cite>Gabriela Gomes</cite>
                  </div>
                </div>
                </div>
                <div className="col-md-4 d-none d-md-block">                
                  <div className="card" >              
                    <img src={fotoRosto8} className="card-img-top img-fluid" alt="Depoimento - Lucas Lima"/>          
                    <div className="card-body">
                      <p className="card-text lead">Antigamente eu não tinha condição de pagar pelo material do meu filho, mas graças a essa ONG meu filho conseguiu obter um kit.</p>
                      <cite>Lucas Lima</cite>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <div className="card" >              
                    <img src={fotoRosto9} className="card-img-top img-fluid" alt="Depoimento - Paula Ramos"/>                
                      <div className="card-body">
                        <p className="card-text lead">Nesses períodos de incertezas somos gratos por essa ONG ajudar nossas crianças.</p>
                        <cite>Paula Ramos</cite>
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
                  <img src={fotoRosto10} className="card-img-top img-fluid d-flex align-self-center" alt="Depoimento - Roberta Pereira"/>               
                  <div className="card-body">
                    <p className="card-text lead">Precisamos agradecer imensamente pela ajuda de vocês, mais um ano ajudando nossos filhos.</p>
                    <cite>Roberta Pereira</cite>
                  </div>
                </div>
                </div>
                <div className="col-md-4 d-none d-md-block">                
                  <div className="card" >              
                    <img src={fotoRosto11} className="card-img-top img-fluid" alt="Depoimento - Manuel Fernandes"/>                 
                    <div className="card-body">
                      <p className="card-text lead">Agradeço a essa ONG por mais uma vez contribuir com os nossos filhos neste momento tão difícil que todos nós estamos passando.</p>
                      <cite>Manuel Fernandes</cite>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <div className="card" >              
                    <img src={fotoRosto12} className="card-img-top img-fluid" alt="Depoimento - Henrique Cardoso"/>     
                      <div className="card-body">
                        <p className="card-text lead">Estou muito grato pela ajuda, não sei o que seria dos meus filhos sem essa ONG.</p>
                        <cite>Henrique Cardoso</cite>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>      
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselControle3" data-bs-slide="prev">
          <i class="fas fa-angle-left fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselControle3" data-bs-slide="next">
          <i class="fas fa-angle-right fa-3x" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    {/*Footer*/}
    <Rodape/>

    </div>    
  );
}

export default withRouter(App);
