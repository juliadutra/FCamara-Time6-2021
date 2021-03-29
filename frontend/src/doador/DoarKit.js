import React from "react"
import Cabecalho from "../Cabecalho"
import DadosDoacao from "./DadosDoacao"


export default function DoarKit() {
    return (
        <>
            <Cabecalho />
            <div className="container">
                <h1 className="p-4 mt-3">DOADOR(A) </h1>
                <div className="leader m-3 p-4">
                    Sua doação é muito importante para a transformação de vidas das crianças.
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <DadosDoacao />
                    </div>
                </div>
            </div>
        </>
    )
}