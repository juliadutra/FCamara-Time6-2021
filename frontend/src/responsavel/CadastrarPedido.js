import React, { useState } from "react";
import { validate } from 'gerador-validador-cpf';
import { useAlert } from "react-alert";
import Cabecalho from "../Cabecalho";
import UFs from "../doador/UFs";
import Municipios from "../doador/Municipios";
import Escolas from "../doador/Escolas";
import PedidoCadastrado from "./PedidoCadastrado";

function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

export default function CadastrarPedido() {
    const alert = useAlert()
    const [cpf, setCPF] = useState("")
    const [nome, setNome] = useState("")
    const [nomeCrianca, setNomeCrianca] = useState("")
    const [cadastrando, setCadastrando] = useState(false)
    const [solicitacoes, setSolicitacoes] = useState(null)
    const [municipiosDaUF, setMunicipiosDaUF] = useState(null)
    const [todasEscolas, setTodasEscolas] = useState(null)
    const [escolasDoMunicipio, setEscolasDoMunicipio] = useState(null)
    const [escolaSelecionada, setEscolaSelecionada] = useState("")
    const [matricula, setMatricula] = useState("")
    const [solicitacaoCadastrada, setSolicitacaoCadastrada] = useState(null)

    function aoAlterarCPF(event) {
        const cpf = event.target.value
        setCPF(cpf)
    }

    function aoAlterarNome(evento) {
        const nome = evento.target.value
        setNome(nome)
    }

    function aoAlterarNomeCrianca(evento) {
        const nomeCrianca = evento.target.value
        setNomeCrianca(nomeCrianca)
    }

    function aoAlterarMatricula(evento) {
        const matricula = evento.target.value
        setMatricula(matricula)
    }

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

    async function aoClicarEmRecuperarSolicitacoes() {
        const cpfValido = validate(cpf)
        if (!cpfValido) {
            alert.error("O CPF informado não é válido")
            return
        }

        const cpfJSON = await recuperarCPF()
        if (cpfJSON === null) {
            alert.error("Não há registro de solicitações para o CPF informado")
        } else {
            setSolicitacoes(cpfJSON.solicitacoes)
        }
    }

    async function recuperarCPF() {
        const cpfBuscar = cpf.replaceAll(".", "").replaceAll("-", "")
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/cpfs/" + cpfBuscar + ".json"
        const resultado = await fetch(url)
        return await resultado.json()
    }

    async function aoAlterarMunicipio(evento) {
        const municipioSelecionado = evento.target.value
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
    }

    function aoAlterarEscola(evento) {
        const escolaSelecionada = evento.target.value
        setEscolaSelecionada(escolaSelecionada)
    }

    function aoClicarEmNovaSolicitacao() {
        if (validate(cpf)) {
            setCadastrando(true)
            setEscolaSelecionada("")
            setEscolasDoMunicipio(null)
            setMunicipiosDaUF(null)
        } else {
            alert.error("O CPF informado não é válido")
        }
    }

    function aoClicarEmCancelar() {
        setCadastrando(false)
    }

    async function aoClicarEmCadastrar() {
        if (nome.trim() === "") {
            alert.error("Por favor, informe o seu nome")
            return
        }

        if (nomeCrianca.trim() === "") {
            alert.error("Por favor, informe o nome da criança")
            return
        }

        if (escolaSelecionada === "") {
            alert.error("Por favor, informe a escola onde a criança estuda")
            return
        }

        if (matricula.trim() === "") {
            alert.error("Por favor, informe a matrícula")
            return
        }

        const cpfJSON = await recuperarCPF()
        
        const cpfSemFormatacao = cpf.replaceAll(".", "").replaceAll("-", "")
        let solicitacoes = []

        if (cpfJSON !== null) {
            solicitacoes = cpfJSON.solicitacoes
        }

        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/pedidos.json"
        const resposta = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                cpf: cpfSemFormatacao
            })
        })
        const dadosPedido = await resposta.json()

        const solicitacaoCadastrar = {
            escola: escolaSelecionada,
            matricula: matricula,
            nome: nome,
            nomeCrianca: nomeCrianca,
            codigoPedido: dadosPedido.name
        }
        solicitacoes.push(solicitacaoCadastrar)
        
        const urlCPF = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/cpfs/" + cpfSemFormatacao + ".json"
        await fetch(urlCPF, {
            method: "PUT", body: JSON.stringify({solicitacoes: solicitacoes})
        })

        setSolicitacaoCadastrada(solicitacaoCadastrar)
    }

    function exibirBotoesIniciais() {
        if (cadastrando) {
            return null
        } else {
            return (
                <>
                    <button className="btn btn-primary btn-sm btn-block" onClick={aoClicarEmRecuperarSolicitacoes}>
                        Recuperar Solicitações
                    </button>
                    <button className="btn btn-link btn-sm btn-block" onClick={aoClicarEmNovaSolicitacao}>
                        Nova Solicitação
                    </button>
                </>
            )
        }
    }

    function exibirFormularioCadastro() {
        if (cadastrando) {
            return (
                <>
                    <label className="form-label">Qual o seu nome?</label>
                    <input className="form-control mb-3" value={nome} onChange={aoAlterarNome} />

                    <label className="form-label">Qual o nome da criança?</label>
                    <input className="form-control mb-3" value={nomeCrianca} onChange={aoAlterarNomeCrianca} />

                    <p>Em qual escola ela estuda?</p>
                    <hr />

                    <UFs onChange={aoAlterarUF} />
                    <Municipios lista={municipiosDaUF} onChange={aoAlterarMunicipio} />
                    <Escolas lista={escolasDoMunicipio} valorAtual={escolaSelecionada} onChange={aoAlterarEscola} />
                    
                    <label className="form-label">Informe a Matrícula</label>
                    <input className="form-control mb-3" value={matricula} onChange={aoAlterarMatricula} />

                    <button className="btn btn-primary" onClick={aoClicarEmCadastrar}>Cadastrar</button>
                    <button className="btn btn-link" onClick={aoClicarEmCancelar}>Cancelar</button>
                </>
            )
        } else {
            return null
        }
    }

    const exibirMensagemCPFInvalido = cpf.length > 10 && !validate(cpf)
    return (
        <>
            <Cabecalho />
            <PedidoCadastrado solicitacaoCadastrada={solicitacaoCadastrada} cpf={cpf} />
            {
                solicitacaoCadastrada == null && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="card m-2">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal">Dados da Solicitação</h4>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            { !cadastrando && (<p>Digite o seu CPF para registrar uma nova solicitação de Kit Escolar ou para consultar solicitações já registradas</p>) }
                                            <label htmlFor="cpf" className="form-label">Informe o seu CPF</label>
                                            <input
                                                type="text"
                                                disabled={cadastrando}
                                                className="form-control mb-3"
                                                style={{ maxWidth: 350 }}
                                                maxLength={14}
                                                onChange={aoAlterarCPF}
                                                placeholder="Ex.: 078.840.390-79"
                                                value={mascaraCpf(cpf)}
                                            />
                                            {
                                                exibirMensagemCPFInvalido && (
                                                    <div className="mt-2 text-danger">
                                                        Por favor, informe um CPF válido
                                                    </div>
                                                )
                                            }

                                            { exibirBotoesIniciais() }

                                            { exibirFormularioCadastro() }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                !cadastrando && solicitacoes && solicitacoes.map((solicitacao) => (
                                    <div className="col-sm-12 col-md-6 col-lg-4" key={solicitacao.codigo}>
                                        <div className="card m-2">
                                            <div className="card-header">
                                                Solicitação
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </>
    )
}