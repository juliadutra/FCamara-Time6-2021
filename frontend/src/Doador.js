import React from 'react'
import Cabecalho from './Cabecalho';
import { Link } from "react-router-dom";

export default function Doador() {
  return (
    <div>
      <Cabecalho />
      <section>
        <div className="text-center">
          <p className="display-4 mt-4">Entenda Como Você Pode Contribuir
          </p>
          <div className="leader m-3 p-4">Nós da Iniciativa X acreditamos que toda criança pode sonhar com um futuro melhor.
            Ser um doador significa dar a uma criança em situação de vulnerabilidade a oportunidade de ser protagonista da própria vida. Gostaria de fazer isso por alguém? Saiba como:
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4">
              <div className="card m-4">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Kit</h4>
                </div>
                <div className="card-body">
                  <p>Você pode adquirir Kits pré formulados por nós, em parceria com papelarias/livrarias conveniadas, com materiais adequados à realidade de cada faixa etária escolar.
                  </p>
                  <Link to="/doar-kit">
                    <button>
                      DOE AGORA
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card m-4">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Outros valores</h4>
                </div>
                <div className="card-body">
                  <p>
                    Se você não pode contribuir com o Kit, não tem problema nenhum. Nós aceitamos a doação de qualquer valor também. A cada R$ 80 arrecadados, montamos um Kit para doação.
                  </p>
                  <button>
                    DOE AGORA
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card m-4">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">ONG</h4>
                </div>
                <div className="card-body">
                  <p>
                    Caso tenha material escolar disponível, novo e em boa condição de uso, pode doar diretamente em uma de nossas ONG's parceiras. Eles farão a separação e montagem de um Kit seguindo nossas diretrizes.
                  </p>
                  <button>
                    SAIBA MAIS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}