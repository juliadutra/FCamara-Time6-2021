import React from "react";

export default function DoacaoCadastrada(props) {

    if (props.tickets === null) {
        return null;
    }

    return props.tickets && (
        <>
            <div className="row">
                <div className="col-lg-8 p-4">
                    <h4>Tickets gerados</h4>
                    <h6>Abaixo estão a lista de tickets de doação gerados e dos parceiros que você pode procurar para validá-los. Você informará o código do ticket ao parceiro e, uma vez validado, o ticket de doação gerará o direito de uma das nossas crianças retirar um kit material escolar no parceiro que efetuou a validação.</h6>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Número do ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.tickets.map((ticket, index) => (
                                    <tr key={ticket.codigo}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{ticket.codigo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <h6>Parceiros:</h6>
            <hr />
            <div className="row p-1">
                {
                    props.parceirosDoMunicipio.map((parceiro) => (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={parceiro.codigo}>
                            <div className="card">
                                <div className="card-header">
                                    {parceiro.nome}
                                </div>
                                <div className="card-body">
                                    <p>{parceiro.endereco}</p>
                                    <p>{parceiro.telefone}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}