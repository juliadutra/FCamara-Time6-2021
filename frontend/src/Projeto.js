import React from 'react'
import Cabecalho from './Cabecalho';
import './Projeto.css';
import foto1 from './Imagens/secaoProjeto1.jpg';
import foto2 from './Imagens/secaoProjeto2.jpg';
import foto3 from './Imagens/parceria1.jpg';
import foto4 from './Imagens/montagemKit1.jpg';
import foto5 from './Imagens/montagemKit2.jpg';
import foto6 from './Imagens/montagemKit3.jpg';
import foto7 from './Imagens/parceiro1.jpg';
import foto8 from './Imagens/parceiro2.jpg';
import foto9 from './Imagens/parceiro3.png';
import foto10 from './Imagens/parceiro4.jpg';
import foto11 from './Imagens/parceiro5.png';
import foto12 from './Imagens/parceiro6.jpeg';
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
            <p className="lead pb-4">
              O projeto foi desenvolvido com o intuito de ajudar crianças e adolescentes que estudam, desde o pré até  o ensino médio, e que precisam de material escolar, mas por algum motivo não em condições de comprar.
            </p>
            <div className="row">
              <div className="col-md-4 inner">
                <img src={foto3} className="img-fluid" alt="Imagem 1 - Imagem de crianças na escola" />                
              </div>
              <div className="col-md-4 inner">
                <img src={foto1} className="img-fluid" alt="Imagem 2 - Imagem de uma criança"  />                
              </div>
              <div className="col-md-4 inner">
                <img src={foto2} className="img-fluid" alt="Imagem 3 - Imagem de crianças pintando" />
              </div>
            </div>
          </div>
        </section>

       {/*Montagem do kit*/} 
       <section id="montagemKit">
         <div className="container text-center">
            <h1 className="display-4 pt-4">Como é a Montagem do Kit</h1>
            <p className="lead pb-4">
            O kit é pensado de acordo com os níveis escolares (nível básico, fundamental e médio) e cada um desses kit’s é montado conforme as exigências desses níveis. 
            Temos uma lista aprovada por educadores, com a descrição do que deve conter nesse kit de material escolar. Essa lista é repassada para nossos parceiros que tem a responsabilidade de montar esse kit.
            Todos os Kit’s montados são inspecionados pela nossa equipe antes de chegarem aos seu destinos. 
            </p>
            <div className="row">
              <div className="col-md-4 inner">
                <img src={foto4} className="img-fluid"  alt="Imagem 4 - Kit escolar"/>
              </div>
              <div className="col-md-4 inner">
                <img src={foto5} className="img-fluid" alt="Imagem 5 - Kit escolar" />
              </div>
              <div className="col-md-4 inner">
                <img src={foto6} className="img-fluid" alt="Imagem 6 - Kit escolar"  />
              </div>
            </div> 
         </div>         
       </section>

        {/*Capa Secundária*/}
        <section id="entregaKit">
          <div className="container text-center">
            <h1 className="display-4 pt-4">Como é a entrega do Kit</h1>
            <p className="lead">
              A medida me que a doação é comprovada, enviamos uma notificação ao responsável dizendo que a criança foi contemplada com um kit escolar, e que ele deverá retirar esse kit em até 5 dias uteis na loja X localizada no endereço Y onde, foi efetuado o pagamento.
            </p>
          </div>
        </section>
      

       {/*Parceiros*/}
       <section id="ImagensParceiros">
         <div className="container text-center pt-4">
          <h1 className="display-4">Parceiros</h1>
            <div className="row">
              <div className="col-xl-6">
                <img src={foto7} className="me-4" width="150" height="150" alt="Mundo da Papelaria" /> 
                <img src={foto8} className="me-4" width="150" height="150" alt="Papelaria Brasilia Brinquedos" />   
                <img src={foto9} className="me-4"  width="150" height="150" alt="Arco - Íris Bazer e Livraria" />                
              </div>
           
              <div className="col-xl-6">                
                <img src={foto10} className="me-4" width="150" height="150" alt="Papelaria Jambo" />     
                <img src={foto11} className="me-4" width="150" height="150" alt="Fun - Papelaria Divertida" /> 
                <img src={foto12} className="me-4" width="150" height="150" alt="Carinho em Papel - Papelaria Personalizada &amp; Arte Digital" />            
              </div>        
            
            </div>
         </div>
       </section>

      {/*Footer*/}
      <Rodape />      
    </div>
    );
  }