import React from "react";
import Cabecalho from "./Cabecalho";
import './SejaPadrinhoNovo.css';
import Rodape from "./Rodape";

export default function SejaPadrinhoNovo() {
    return (
        <div>
 
         <Cabecalho/>
         
         {/*Informações do responsável*/}
         <section id="informacaoResponsavel">
             <div className="container">
                 <h1 className="display-4 text-center pt-4">Cadastre-se</h1>
                 <h2 className="display-6 text-start pt-2">Preencha os dados abaixo do Responsável</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <fieldset>
                                <div className="form-group mb-4">
                                    <label for="nomeCompleto">Nome Completo</label>
                                    <input className="form-control form-control" type="text" id="nomeCompleto" placeholder="Ex. João da Silva" />
                                </div>
                                <div className="form-group mb-4">
                                    <label for="cidade">Cidade</label>
                                    <input className="form-control form-control" type="text" id="cidade" placeholder="Ex. Santos" />
                                </div>

                                <div className="form-group mb-4">
                                    <label for="municipio">Município</label>
                                    <input className="form-control form-control" type="text" id="municipio" placeholder="Ex. São Paulo" />
                                </div>
                                
                                <div className="form-group mb-4">
                                    <label for="email">E-mail</label>
                                    <input className="form-control form-control" type="email" id="email" placeholder="Ex. joao@email.com"/>
                                </div>
                                
                                <button type="button" className="justify-content-md-center">Enviar</button>
                                
                            </fieldset>
                        </form>
                    </div>
                </div>
             </div>
         </section>

         {/*Informações da criança*/}
         <section id="informacaoCrianca" className="mt-4">
             <div className="container">
                 <h2 className="display-6 text-start pt-2">Preencha os dados abaixo do Responsável</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <fieldset>
                                <div className="form-group mb-4">
                                    <label for="nomeCompleto">Nome Completo</label>
                                    <input className="form-control form-control" type="text" id="nomeCompleto" placeholder="Ex. João da Silva" />
                                </div>
                                <div className="form-group mb-4">
                                    <label for="escola">Escola</label>
                                    <input className="form-control form-control" type="text" id="escola" placeholder="Ex. Colégio Barnabé" />
                                </div>

                                <div className="form-group mb-4">
                                    <label for="serie">Série</label>
                                    <input className="form-control form-control" type="text" id="serie" placeholder="Ex. Ensino Fundamental" />
                                </div>
                                
                                <div className="form-group mb-4">
                                    <label for="cidade2">Cidade</label>
                                    <input className="form-control form-control" type="text" id="cidade2" placeholder="Ex. Santos" />
                                </div>

                                <div className="form-group mb-4">
                                    <label for="municipio2">Município</label>
                                    <input className="form-control form-control" type="text" id="municipio2" placeholder="Ex. São Paulo" />
                                </div>
                                
                                <button type="button" className="justify-content-md-center">Enviar</button>
                                
                            </fieldset>
                        </form>
                    </div>
                </div>
             </div>
         </section>
 
         {/*Footer*/}
         <Rodape/>
        </div>
     )
}