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
                        <h6>A seguir estão os dados da sua solicitação, você pode consultar todos os pedidos a partir do seu CPF no futuro.</h6>
                        <div className="card">
                            <div className="card-header">
                                Pedido nᵒ {props.solicitacaoCadastrada.codigoPedido}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


}