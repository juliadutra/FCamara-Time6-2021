import React from "react";

export default function FormularioConsultarTicket(props) {
    return (
        <div className="container">
            <h1>Consultar Ticket</h1>
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-3">
                        <label className="form-label">Informe o código do ticket</label>
                        <input
                            value={props.numeroTicket}
                            onChange={props.aoAlterarNumeroTicket}
                            className="form-control"
                            style={{ maxWidth: 350 }}
                        />
                        <div className="mb-3">
                            <button
                                className="btn btn-outline-primary"
                                onClick={props.aoConsultar}>
                                Consultar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}