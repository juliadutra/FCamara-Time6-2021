import React, { useState } from "react";
import UFs from "./UFs"
import Municipios from "./Municipios";



export default function DadosDoacao() {

    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)
    const [municipioSelecionado, setMunicipioSelecionado] = useState(null)
    const [seEscolaEspecifica, setSeEscolaEspecifica] = useState(null)

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
        setMunicipioSelecionado(null)
        setSeEscolaEspecifica(null)

    }

    function aoAlterarMunicipio(evento) {
        const municipioSelecionado = evento.target.value
        setMunicipioSelecionado(municipioSelecionado)
        setSeEscolaEspecifica(null)
    }

    function aoClicarSimEscolaEspecifica() {
        setSeEscolaEspecifica(true)
    }

    function aoClicarNaoEscolaEspecifica() {
        setSeEscolaEspecifica(false)
    }

    let classesBotaoSim = "btn "
    let classesBotaoNao = "btn "
    
    if (seEscolaEspecifica === null) {
        console.log(1)
        classesBotaoSim = classesBotaoSim + " btn-outline-dark"
        classesBotaoNao = classesBotaoNao + " btn-outline-dark"
    } else if(seEscolaEspecifica) {
        console.log(2)
        classesBotaoSim = classesBotaoSim + " btn-primary"
        classesBotaoNao = classesBotaoNao + " btn-outline-dark"
    } else {
        console.log(3)
        classesBotaoSim = classesBotaoSim + " btn-outline-dark"
        classesBotaoNao = classesBotaoNao + " btn-primary"
    }

    return (
        <div className="card m-4">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Dados da Doação</h4>
            </div>
            <div className="card-body">
                <div>
                    <UFs onChange={aoAlterarUF} />
                    <Municipios lista={municipiosDaUF} onChange={aoAlterarMunicipio} />
                    {
                        municipioSelecionado && (
                            <>
                                <label htmlFor="seEscolaEspecifica" className="form-label">Deseja doar para uma escola específica deste município?</label>
                                <button className={classesBotaoSim} onClick={aoClicarSimEscolaEspecifica}>Sim</button>
                                <button className={classesBotaoNao} onClick={aoClicarNaoEscolaEspecifica}>Não</button>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )

}