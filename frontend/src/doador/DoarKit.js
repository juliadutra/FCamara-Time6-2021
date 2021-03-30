import React, { useState } from "react"
import Cabecalho from "../Cabecalho"
import DadosDoacao from "./DadosDoacao"
import Carregando from "../Carregando"

export default function DoarKit() {
    const [ carregando, setCarregando ] = useState(false)
    return (
        <>
            <Cabecalho />
            <Carregando exibir={carregando}/>
            <div className="container">
                <h1 className="p-4 mt-3">DOADOR(A) </h1>
                <div className="leader m-3 p-4">
                    Sua doação é muito importante para a transformação de vida das crianças.
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <DadosDoacao setCarregando={setCarregando} />
                    </div>
                </div>
            </div>
        </>
    )
}