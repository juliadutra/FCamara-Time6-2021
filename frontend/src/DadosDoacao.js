import React, { useState } from "react";
import UFs from "./UFs"
import Municipios from "./Municipios";



export default function DadosDoacao() {

    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)

    async function aoAlterarUF(evento) {
        const siglaUF = evento.target.value
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/ufs/" + siglaUF + ".json"
        const ufRecuperada = await fetch(url)
        const ufRecuperadaJson = await ufRecuperada.json()

        if (ufRecuperadaJson) {
            setMunicipiosDaUF(ufRecuperadaJson.municipios)
        } else {
            setMunicipiosDaUF([])
        }

    }



    return (
        <div className="card m-4">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Dados da Doação</h4>
            </div>
            <div className="card-body">
                <div>
                    <UFs onChange={aoAlterarUF} />
                    <Municipios lista={municipiosDaUF} />
                </div>
            </div>
        </div>
    )

}