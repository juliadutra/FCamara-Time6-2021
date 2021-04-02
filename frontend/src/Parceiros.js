import React from 'react'
import Cabecalho from './Cabecalho';
import './Parceiros.css';
import { Link } from "react-router-dom";
import Rodape from './Rodape';

export default function Parceiros() {
    return (
      <div id="parceiros">
        <Cabecalho/>
        {/*<h1>Parceiros</h1>*/}

        <section id="secaoParceiros">
          <h1 className="display-6 pt-4 text-center">Entenda como funciona nossa parceria</h1>

          <div className="container pt-4">
            <div className="row">
              <div className="col-md-12">
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <Link to="/validar-doacao">
                    Sou parceiro e quero validar uma doação
                  </Link>
              </div>
              
            </div>
          </div>
        </section>

        <section>
          <h1 className="display-6 pt-4 text-center">Alguns de nossos parceiros</h1>

          <div className="container pt-4">
            <div className="row">
              <div className="col-md-12">
                  Imagens
              </div>
            </div>
          </div>
        </section>

        <section id="tonarParceiro" className="d-flex text-center">
          <div className="container align-self-center">
            <div className="row">
              <div className="col-md-12">
                  <h1 className="display-6 pt-4 pb-4">Seja um parceiro você também</h1>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                <div class="d-grid gap-2 d-flex justify-content-center">
                  <button class="btn btn-outline-dark" type="button">Quero me tornar um parceiro</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Rodapé*/}
        <Rodape />

      </div>
    );
  }