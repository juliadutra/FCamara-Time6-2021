import React, { useState } from "react"
import Cabecalho from "../Cabecalho"
import Carregando from "../Carregando"
import DoacaoCadastrada from "./DoacaoCadastrada"
import UFs from "./UFs"
import Municipios from "./Municipios"
import OpcaoEscolaEspecifica from "./OpcaoEscolaEspecifica"
import NumeroKits from "./NumeroKits"

export default function DoarKit() {
    const [carregando, setCarregando] = useState(false)
    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)
    const [municipioSelecionado, setMunicipioSelecionado] = useState(null)
    const [escolaSelecionada, setEscolaSelecionada] = useState(null)
    const [seEscolaEspecifica, setSeEscolaEspecifica] = useState(false)
    const [numeroKits, setNumeroKits] = useState(1)
    const [ticketsCadastrados, setTicketsCadastrados] = useState(null)

    async function aoAlterarUF(evento) {
        const siglaUF = evento.target.value
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/ufs/" + siglaUF + ".json"
        setCarregando(true)
        const ufRecuperada = await fetch(url)
        const ufRecuperadaJson = await ufRecuperada.json()

        if (ufRecuperadaJson) {
            setMunicipiosDaUF(ufRecuperadaJson.municipios)
        } else {
            setMunicipiosDaUF([])
        }
        setMunicipioSelecionado(null)
        setSeEscolaEspecifica(null)
        setCarregando(false)
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

    async function aoClicarEmGerarTickets() {
        const ticket = {
            municipio: municipioSelecionado,
            escola: escolaSelecionada
        }
        const tickets = []

        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/tickets.json"
        setCarregando(true)
        for (var i = 1; i <= numeroKits; i++) {
            const ticketCadastrado = await fetch(url, {
                method: "POST",
                body: JSON.stringify(ticket)
            })

            const ticketCadastradoJson = await ticketCadastrado.json()
            tickets.push(ticketCadastradoJson)
        }
        setCarregando(false)
        setTicketsCadastrados(tickets)
    }

    function aoAlterarNumeroKits(evento) {
        const numeroKits = evento.target.value
        if (Number(numeroKits) > 0 && Number(numeroKits) < 11) {
            setNumeroKits(numeroKits)
        }
    }
    return (
        <>
            <Cabecalho />
            <Carregando exibir={carregando} />
            <div className="container">
                <h1 className="p-4 mt-3">DOADOR(A) </h1>
                <div className="leader m-3 p-4">
                    Sua doação é muito importante para a transformação de vida das crianças.
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <DoacaoCadastrada tickets={ticketsCadastrados} />
                        {
                            ticketsCadastrados == null && (
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

                                                        <button
                                                            type="button"
                                                            class="btn btn-success btn-lg"
                                                            onClick={aoClicarEmGerarTickets}
                                                        >
                                                            Gerar Tickets de Doação
                                            </button>

                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}