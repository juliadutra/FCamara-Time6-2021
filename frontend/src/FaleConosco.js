import React from 'react'
import Cabecalho from './Cabecalho';
import './FaleConosco.css';
import Rodape from './Rodape';

export default function FaleConosco() {
    return (
      <div id="faleconosco">
        <Cabecalho/>
        {/*<h1>Fale Conosco</h1>*/}
          

        {/*Capa*/}
        <section id="capaFaleConosco" className="d-flex">
          <div className="container align-self-center">
            <h1 className="display-4 text-center">Fale conosco</h1>
          </div>
        </section>


        {/*Texto e formulário*/}
        <section id="secaoFaleConosco">
          <div className="container">
            <div className="row">
              {/*Contato*/}   
              <div className="col-md-6">
                <h1 className="display-6">Nossos Contatos</h1>                             
                <p className="lead">
                  <i class="fas fa-phone-alt"></i> <b>Telefone:</b> (99) 99999-9999<br/>                                    
                </p>
                <p className="lead">
                  <i class="fab fa-whatsapp"></i> <b>WhatsApp:</b> (99) 99999-9999<br/>
                </p>
                <p className="lead">
                  <i class="far fa-envelope"></i> <b>E-Mail:</b> informacoes@padrinhosdobem.com<br/>
                </p>
              </div>
              
              <div className="col-md-6">
                <form>
                  <fieldset>
                    <legend className="display-6">Formulário</legend>
                    <div className="form-group mb-4">
                      <label for="usuario">Seu nome completo</label>
                      <input className="form-control form-control" type="text" id="usuario" placeholder="Ex. João da Silva" />
                    </div>

                    <div className="form-group mb-4">
                      <label for="email">Digite seu email</label>
                      <input className="form-control form-control" type="email" id="email" placeholder="Ex. joao@email.com" />
                    </div>

                    <div className="form-group mb-4">
                      <label for="telefone">Digite seu telefone</label>
                      <input className="form-control form-control" type="text" id="telefone" placeholder="Ex. (99) 99999-9999" />
                    </div>

                    <div className="form-group mb-4">
                      <label for="assunto">Assunto</label>
                      <input className="form-control form-control" type="text" id="assunto" placeholder="Ex. Doação mensal" />
                    </div>

                    <div className="form-group mb-4">
                      <label for="mensagem">Assunto</label>
                      <textarea className="form-control" id="mensagem"  rows="3" placeholder="Digite aqui a sua mensagem"></textarea>
                    </div>

                    <button type="button" className="btn btn-outline-dark justify-content-md-center">Enviar</button>
                   
                  </fieldset>
                </form>
              </div>

              
            </div>
          </div>
        </section>

        {/*Rodapé*/}
        <Rodape />
      </div>
    );
  }