import React from "react"
import Cabecalho from "./Cabecalho"


export default function DoarKit() {
    return (
        <>
            <Cabecalho />
            <div className="text-center">
                <p className="display-4 mt-4">DOADOR(A) </p>
            </div>
            <div className="leader m-3 p-4">
                Sua doação é muito importante para a transformação de vidas das crianças.
            </div>
            <div className="card m-4">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Dados da Doação</h4>
                </div>
                <div className="card-body">
                    Selecione a UF:
                    <input/>
                </div>
            </div>
        </>
    )
}