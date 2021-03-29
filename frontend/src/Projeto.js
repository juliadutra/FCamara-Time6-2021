import React from 'react'
import Cabecalho from './Cabecalho';
import './Projeto.css';

export default function Projeto() {
    return (
      <div id="projeto">
        <Cabecalho/>
        
      {/*Nossa história*/}
      <section id="historia">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6">
              <h1 className="display-6">Nossa história</h1>
              <p className="lead pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div className="col-md-6">
              carousel
            </div>
          </div>
        </div>
      </section>

      {/*missão, visão e valores*/}
      <section id="missao" className="bg-light">
        <div className="container">
          <h2 className="text-center display-5">Missão, Visão e Valores</h2>
          <div>
            <h3 className="display-6">Missão</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div>
            <h3 className="display-6">Visão</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div>
            <h3 className="display-6">Valores</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        </div>
      </section>
      </div>
    );
  }