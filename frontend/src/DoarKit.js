import React from "react"
import Cabecalho from "./Cabecalho"
import DadosDoacao from "./DadosDoacao"


export default function DoarKit() {
    return (
        <>
            <Cabecalho />
            <div className="container">
                <h1 className="p-4">DOADOR(A) </h1>
                <div className="leader p-4">
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