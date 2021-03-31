import React, { useState } from "react"
import Cabecalho from "../Cabecalho"

export default function ValidarDoacao() {
    const [numeroTicket, setNumeroTicket] = useState("")
    function aoAlterarNumeroTicket(evento) {
        setNumeroTicket(evento.target.value)
    }

    function aoClicarConsultarTicket() {
        console.log(numeroTicket)
    }

    return (
        <>
            <Cabecalho />
            <div className="container">
                <h1>Consultar Ticket</h1>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label className="form-label">Informe o número do ticket</label>
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