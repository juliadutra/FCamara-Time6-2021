import React from "react";
import Cabecalho from "../Cabecalho";
import DadosSolicitacao from "./DadosSolicitacao";

export default function CadastrarPedido() {
    return (
        <>
            <Cabecalho />
            <div className="container">
                <div className="leader p-4">
                    Quero Solicitar Kit de Material Escolar
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <DadosSolicitacao />
                    </div>
                </div>
            </div>
            
        </>
    )
}