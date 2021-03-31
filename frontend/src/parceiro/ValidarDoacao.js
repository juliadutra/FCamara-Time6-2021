import React, { useState } from "react"
import Cabecalho from "../Cabecalho"
import { useAlert } from "react-alert"

export default function ValidarDoacao() {
    const [numeroTicket, setNumeroTicket] = useState("")
    const alert = useAlert()
    function aoAlterarNumeroTicket(evento) {
        setNumeroTicket(evento.target.value)
    }

    async function aoClicarConsultarTicket() {
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/tickets/" + numeroTicket + ".json"
        const resposta = await fetch(url)
        const respostaJson = await resposta.json()
        if(respostaJson === null) {
            alert.error("Nenhum ticket encontrado com o código " + numeroTicket)
        } else {
            alert.info("Ticket encontrado: " + JSON.stringify(respostaJson))
        }
    }

    return (
        <>
            <Cabecalho />
            <div className="container">
                <h1>Consultar Ticket</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label className="form-label">Informe o código do ticket</label>
                            <input
                                value={numeroTicket}
                                onChange={aoAlterarNumeroTicket}
                                className="form-control"
                                style={{ maxWidth: 350 }}
                            />
                            <div className="mb-3">
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={aoClicarConsultarTicket}>
                                    Consultar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}