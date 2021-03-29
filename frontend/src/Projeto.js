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
      </div>
    );
  }