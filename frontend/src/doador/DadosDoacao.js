import React, { useState } from "react";
import UFs from "./UFs"
import Municipios from "./Municipios";
import OpcaoEscolaEspecifica from "./OpcaoEscolaEspecifica";
import NumeroKits from "./NumeroKits";

export default function DadosDoacao(props) {

    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)
    const [municipioSelecionado, setMunicipioSelecionado] = useState(null)
    const [seEscolaEspecifica, setSeEscolaEspecifica] = useState(false)
    const [numeroKits, setNumeroKits] = useState(1)

    async function aoAlterarUF(evento) {
        const siglaUF = evento.target.value
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/ufs/" + siglaUF + ".json"
        props.setCarregando(true)
        const ufRecuperada = await fetch(url)
        const ufRecuperadaJson = await ufRecuperada.json()

        if (ufRecuperadaJson) {
            setMunicipiosDaUF(ufRecuperadaJson.municipios)
        } else {
            setMunicipiosDaUF([])
        }
        setMunicipioSelecionado(null)
        setSeEscolaEspecifica(null)
        props.setCarregando(false)
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

    function aoAlterarNumeroKits(evento) {
        const numeroKits = evento.target.value
        if(Number(numeroKits) > 0 && Number(numeroKits) < 11) {
            setNumeroKits(numeroKits)
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
                    <Municipios lista={municipiosDaUF} onChange={aoAlterarMunicipio} />
                    {
                        municipioSelecionado && (
                            <>
                                <OpcaoEscolaEspecifica
                                    valorAtual={seEscolaEspecifica}
                                    aoClicarSim={aoClicarSimEscolaEspecifica}
                                    aoClicarNao={aoClicarNaoEscolaEspecifica}
                                />

                                <NumeroKits
                                    valorAtual={numeroKits}
                                    onChange={aoAlterarNumeroKits}
                                />

                                <button type="button" class="btn btn-success btn-lg">Gerar Tickets de Doação</button>

                            </>
                        )
                    } 
                </div>
            </div>
        </div>
    )

}