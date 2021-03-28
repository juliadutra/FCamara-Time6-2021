import React from "react";
import UFs from "./UFs"

export default function DadosDoacao() {
    return(
        <div className="card m-4">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Dados da Doação</h4>
                </div>
                <div className="card-body">
                    <div>
                        <UFs/>
                    </div>
                </div>
            </div>
    )
    
}