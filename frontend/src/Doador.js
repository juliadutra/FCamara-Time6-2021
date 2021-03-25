import React from 'react'
export default function Doador() {
  return (
    <div>
      <div className="text-center">
        <p className="display-4">Entenda Como Você Pode Contribuir</p>
        <div className="leader m-3 p-4">Nós da Iniciativa X acreditamos que toda criança pode sonhar com um futuro melhor.
          Ser um doador significa dar a uma criança em situação de vulnerabilidade a oportunidade de ser protagonista da própria vida. Gostaria de fazer isso por alguém? Saiba como:
        </div>
      </div>
      <div className="container">
        <div class="card-deck mb-3 text-center row">
          <div className="card m-4 box-shadow col">
            <div className="card-header">
              <h4 class="my-0 font-weight-normal">Kit</h4>
            </div>
            <div className="card-body">
              <p>Você pode adquirir Kits pré formulados por nós, em parceria com papelarias/livrarias parceiras, com materiais adequados à realidade de cada faixa etária escolar.
              </p>
            </div>
          </div>
          <div className="card m-4 box-shadow col">
            <div className="card-header">
              <h4 class="my-0 font-weight-normal">Outros valores</h4>
            </div>
            <div className="card-body">
              <p>Se você não pode contribuir com o Kit, não tem problema nenhum. Nós aceitamos a doação de qualquer valor também. A cada R$ 80 arrecadados, montamos um Kit para doação.
              </p>
            </div>
          </div>
          <div className="card m-4 box-shadow col">
            <div className="card-header">
              <h4 class="my-0 font-weight-normal">ONG</h4>
            </div>
            <div className="card-body">
              <p>
              Caso tenha material escolar disponível, novo e em boa condição de uso, pode doar diretamente em uma de nossas ONG's parceiras. Eles farão a separação e montagem de um Kit seguindo nossas diretrizes. 
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}