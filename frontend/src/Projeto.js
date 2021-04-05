import React from 'react'
import Cabecalho from './Cabecalho';
import './Projeto.css';
import foto1 from './Imagens/secaoProjeto1.jpg';
import foto2 from './Imagens/secaoProjeto2.jpg';
import foto3 from './Imagens/parceria1.jpg';
import foto4 from './Imagens/montagemKit1.jpg';
import foto5 from './Imagens/montagemKit2.jpg';
import foto6 from './Imagens/montagemKit3.jpg';
import Rodape from './Rodape';

export default function Projeto() {
    return (
      <div id="projeto">
        <Cabecalho/>              

        {/*Capa Principal*/}
        <div id="capaPrincipal"></div>

        {/*Para quem é o projeto*/}
        <section id="quemSeDestina">
          <div className="container text-center pt-4">
            <h1 className="display-4">Pra quem é o Projeto</h1>
            <p className="lead">
              Texto provisório
            </p>
            <div className="row">
              <div className="col-md-4 inner">
                <img src={foto1} className="img-fluid"  />
              </div>
              <div className="col-md-4 inner">
                <img src={foto2} className="img-fluid"  />
              </div>
              <div className="col-md-4 inner">
                <img src={foto3} className="img-fluid"  />
              </div>
            </div>
          </div>
        </section>

       {/*Montagem do kit*/} 
       <section id="montagemKit">
         <div className="container text-center">
            <h1 className="display-4 pt-4">Como é a Montagem do Kit</h1>
            <p className="lead">Texto provisório</p>
            <div className="row">
              <div className="col-md-4 inner">
                <img src={foto4} className="img-fluid"  />
              </div>
              <div className="col-md-4 inner">
                <img src={foto5} className="img-fluid"  />
              </div>
              <div className="col-md-4 inner">
                <img src={foto6} className="img-fluid"  />
              </div>
            </div> 
         </div>         
       </section>

       {/*Capa Secundária*/}
       <div id="capaSecundaria" className="mt-4"></div>

       {/*Parceiros*/}
       <section>
         <div className="container text-center pt-4">
          <h1 className="display-4">Parceiros</h1>
          imagens parcerias
         </div>
       </section>

      {/*Footer*/}
      <Rodape />      
    </div>
    );
  }