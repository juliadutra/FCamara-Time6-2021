import React from "react";

export default function DoacaoCadastrada(props) {
  return props.tickets && (
        <div className="m-3">
            <h4>Tickets gerados</h4>
            <h6>Abaixo estão a lista de tickets de doação gerados e dos parceiros que você pode procurar para validá-los. Você informará o código do ticket ao parceiro e, uma vez validado, o ticket de doação gerará o direito de uma das nossas crianças retirar um kit material escolar no parceiro que efetuou a validação.</h6>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Número do ticket</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tickets.map((ticket, index) => (
                            <tr key={ticket.name}>
                                <th scope="row">{index + 1}</th>
                                <td>{ticket.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}