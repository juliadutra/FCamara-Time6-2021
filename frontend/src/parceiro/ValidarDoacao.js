import React, {useState} from "react"
import Cabecalho from "../Cabecalho"
import { useAlert } from "react-alert"

export default function ValidarDoacao() {
    const [codigoTicket, setCodigoTicket] = useState("")
    const [chaveValidacao, setChaveValidacao] = useState("")
    const alert = useAlert()
    function aoAlterarCodigoTicket(evento) {
        setCodigoTicket(evento.target.value)
    }
    function aoAlterarChaveValidacao(evento) {
        setChaveValidacao(evento.target.value)
    }
    
    async function aoClicarValidar() {
        if (codigoTicket === "" || chaveValidacao === "") {
            alert.info("Por favor, informe o código do ticket e a chave de validação.")
        } else {
            const urlTicket = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/tickets/" + codigoTicket + ".json"
            const ticket = await fetch(urlTicket)
            const ticketJson = await ticket.json()
            if (ticketJson === null) {
                alert.error("Nenhum ticket encontrado com o código " + codigoTicket)
            } else {
                const urlParceiro = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/parceiros/" + chaveValidacao + ".json"
                const parceiro = await fetch(urlParceiro)
                const parceiroJson = await parceiro.json()
                if(parceiroJson === null) {
                    alert.error("Chave de validação incorreta")
                } else {
                    alert.info("Tudo certo para validar...")
                }
            }
        }
    }
    return (
        <>
            <Cabecalho />
            <div className="container">
                <h3>Validar Doação</h3>
                <h6>Informe o código do ticket que deseja validar e a chave de validação</h6>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label className="form-label">Código do ticket</label>
                            <input
                                className="form-control"
                                value={codigoTicket}
                                onChange={aoAlterarCodigoTicket}
                                style={{ maxWidth: 350 }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Chave de validação</label>
                            <input
                                className="form-control"
                                value={chaveValidacao}
                                type="password"
                                onChange={aoAlterarChaveValidacao}
                                style={{ maxWidth: 350 }}
                            />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-outline-primary"
                                onClick={aoClicarValidar}>
                                Validar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}