import React, {useState} from "react"
import Cabecalho from "../Cabecalho"

export default function ValidarDoacao() {
    const [codigoTicket, setCodigoTicket] = useState("")
    const [chaveValidacao, setChaveValidacao] = useState("")
    function aoAlterarCodigoTicket(evento) {
        setCodigoTicket(evento.target.value)
    }
    function aoAlterarChaveValidacao(evento) {
        setChaveValidacao(evento.target.value)
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
                    </div>
                </div>
            </div>
        </>
    )
}