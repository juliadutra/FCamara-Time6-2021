import React from 'react'
import Cabecalho from './Cabecalho';
import './Projeto.css';
import Rodape from './Rodape';

export default function Projeto() {
    return (
      <div id="projeto">
        <Cabecalho/>              
      
      {/*Contribuir*/}
      <section id="contribuir">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5">Entenda como você pode contribuir !</h1>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>  
            </div>
          </div>
        </div>
      </section>  

    {/*Encontre escola*/}
    <section id="encontrarEscola">
        <h1 className="display-5 text-center">Encontrar uma escola</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                  <fieldset>
                      <div className="form-group mb-4">
                        <label for="uf">Selecione a UF</label>
                        <select className="form-select form-select mb-3" aria-label=".form-select" id="uf">
                          <option selected>Principal</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <div className="form-group mb-4">
                        <label for="cidade">Selecione a cidade</label>
                          <select className="form-select form-select mb-3" aria-label=".form-select" id="cidade">
                            <option selected>Principal</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                      </div>

                      <div className="form-group mb-4">
                        <label for="escolaEspecifica">Deseja doar para uma escola específica ?</label><br/>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-dark">Sim</button>
                          <button type="button" class="btn btn-outline-dark">Não</button>                         
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label for="nomeEscola">Digite o nome da escola</label>
                        <input className="form-control form-control" type="text" id="nomeEscola" />
                      </div>

                      <div className="form-group mb-4">
                        <input className="form-check-input" type="checkbox" id="identificacao" />
                        <label className="form-check-label ms-2" for="identificacao">Deseja se identificar ? </label><br/>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-dark">Sim</button>
                          <button type="button" class="btn btn-outline-dark">Não</button>                         
                        </div>
                      </div>

                      <button id="botaoPadrao" type="button" className="btn btn-outline-dark justify-content-md-center">Enviar</button>
                      
                  </fieldset>
              </form>
            </div>
          </div>
        </div>
    </section>

      {/*Footer*/}
      <Rodape />      
    </div>
    );
  }