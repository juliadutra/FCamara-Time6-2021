import React, { useState } from "react"
import Cabecalho from "../Cabecalho"
import Carregando from "../Carregando"
import DoacaoCadastrada from "./DoacaoCadastrada"
import FormularioGeracaoTickets from "./FormularioGeracaoTickets"
import CabecalhoDoarKit from "./CabecalhoDoarKit"

export default function DoarKit() {
    const [carregando, setCarregando] = useState(false)
    const [ufSelecionada, setUFSelecionada] = useState("")
    const [parceirosDoMunicipio, setParceirosDoMunicipio] = useState(null)
    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)
    const [municipioSelecionado, setMunicipioSelecionado] = useState(null)
    const [todasEscolas, setTodasEscolas] = useState(null)
    const [escolasDoMunicipio, setEscolasDoMunicipio] = useState(null)
    const [escolaSelecionada, setEscolaSelecionada] = useState("")
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
        setUFSelecionada(siglaUF)
        setMunicipioSelecionado(null)
        setSeEscolaEspecifica(null)
        setCarregando(false)
    }

    function aoAlterarMunicipio(evento) {
        const municipioSelecionado = evento.target.value
        setMunicipioSelecionado(municipioSelecionado)
        setSeEscolaEspecifica(null)
        setEscolasDoMunicipio(null)
    }

    function aoAlterarEscola(evento) {
        setEscolaSelecionada(evento.target.value)
    }

    async function aoClicarSimEscolaEspecifica() {
        let escolas = todasEscolas
        if (todasEscolas === null) {
            const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/escolas.json"
            const response = await fetch(url)
            const escolasJson = await response.json()
            escolas = []
            for (let key in escolasJson) {
                escolas.push({
                    codigo: key,
                    sigla: escolasJson[key].sigla,
                    nome: escolasJson[key].nome,
                    municipio: escolasJson[key].municipio
                })
            }
            setTodasEscolas(escolas)
        }
        if (escolasDoMunicipio === null) {
            const listaEscolasMunicipio = []
            for(let i in escolas) {
                const escola = escolas[i]
                if (escola.municipio === municipioSelecionado) {
                    listaEscolasMunicipio.push(escola)
                }
            }
            setEscolasDoMunicipio(listaEscolasMunicipio)
        }
        setSeEscolaEspecifica(true)
    }

    function aoClicarNaoEscolaEspecifica() {
        setEscolaSelecionada("")
        setSeEscolaEspecifica(false)
    }

    async function aoClicarEmGerarTickets() {
        const ticket = {
            uf: ufSelecionada,
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
            ticket.codigo = ticketCadastradoJson.name
            tickets.push(ticket)
        }

        const resposta = await fetch("https://doacao-de-material-escolar-default-rtdb.firebaseio.com/parceiros.json")
        const dadosParceiros = await resposta.json()
        const parceirosDoMunicipio = []
        for(var key in dadosParceiros) {
            if(dadosParceiros[key].municipio === municipioSelecionado) {
                const parceiro = {
                    codigo: key,
                    nome: dadosParceiros[key].nome,
                    municipio: dadosParceiros[key].municipio,
                    endereco: dadosParceiros[key].endereco,
                    telefone: dadosParceiros[key].telefone
                }
                parceirosDoMunicipio.push(parceiro)
            }
        }
        setParceirosDoMunicipio(parceirosDoMunicipio)

        setCarregando(false)
        setTicketsCadastrados(tickets)
    }

    function aoAlterarNumeroKits(evento) {
        const numeroKits = evento.target.value
        if (Number(numeroKits) > 0 && Number(numeroKits) < 11) {
            setNumeroKits(numeroKits)
        }
    }

    function exibirCabecalho() {
        if (ticketsCadastrados === null) {
            return <CabecalhoDoarKit />
        }
    }

    return (
        <>
            <Cabecalho />
            <Carregando exibir={carregando} />
            <div className="container">
                { exibirCabecalho() }
                <DoacaoCadastrada tickets={ticketsCadastrados} parceirosDoMunicipio={parceirosDoMunicipio} />

                <div className="row">
                    <div className="col-lg-8">
                        {
                            ticketsCadastrados == null && (
                                <div className="card m-4">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Dados da Doação</h4>
                                    </div>
                                    <div className="card-body">
                                        <FormularioGeracaoTickets
                                            aoAlterarUF={aoAlterarUF}
                                            municipiosDaUF={municipiosDaUF}
                                            aoAlterarMunicipio={aoAlterarMunicipio}
                                            municipioSelecionado={municipioSelecionado}
                                            seEscolaEspecifica={seEscolaEspecifica}
                                            aoAlterarEscola={aoAlterarEscola}
                                            escolaSelecionada={escolaSelecionada}
                                            aoClicarSimEscolaEspecifica={aoClicarSimEscolaEspecifica}
                                            aoClicarNaoEscolaEspecifica={aoClicarNaoEscolaEspecifica}
                                            numeroKits={numeroKits}
                                            aoAlterarNumeroKits={aoAlterarNumeroKits}
                                            aoClicarEmGerarTickets={aoClicarEmGerarTickets}
                                            escolasDoMunicipio={escolasDoMunicipio}
                                        />
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