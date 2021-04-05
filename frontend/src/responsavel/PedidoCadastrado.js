import React from "react"

export default function PedidoCadastrado(props) {
    if(props.solicitacaoCadastrada === null) {
        return null
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-4">
                        <h4>Pedido cadastrado com sucesso.</h4>
                        <h6>A seguir estão os dados da sua solicitação, você pode recuperar os dados dos seus pedidos a partir do seu CPF.</h6>
                        <div className="card">
                            <div className="card-header">
                                Pedido nᵒ {props.solicitacaoCadastrada.codigoPedido}
                            </div>
                            <div className="card-body">
                                <p>CPF: {props.cpf}</p> 
                                <p>Nome: {props.solicitacaoCadastrada.nome}</p>
                                <p>Criança: {props.solicitacaoCadastrada.nomeCrianca}</p>
                                <p>Matrícula: {props.solicitacaoCadastrada.matricula}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


}