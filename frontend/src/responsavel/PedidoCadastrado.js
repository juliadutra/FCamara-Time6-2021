import React from "react"

export default function PedidoCadastrado(props) {
    if(props.solicitacaoCadastrada === null) {
        return null
    } else {
        return (
            <div>
                Pedido cadastrado com sucesso.
            </div>
        )
    }


}