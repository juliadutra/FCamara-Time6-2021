import React, { useState } from "react";
import Cabecalho from "../Cabecalho";
import { useAlert } from "react-alert";
import Carregando from "../Carregando";
import FormularioConsultarTicket from "./FormularioConsultarTicket";

export default function ConsultarTicket() {
    const [numeroTicket, setNumeroTicket] = useState("")
    const [exibirCarregando, setExibirCarregando] = useState(false)
    const [ticketEncontrado, setTicketEncontrado] = useState(null)
    const alert = useAlert()
    function aoAlterarNumeroTicket(evento) {
        setNumeroTicket(evento.target.value)
    }

    async function aoClicarConsultarTicket() {
        if (numeroTicket === "") {
            alert.info("Por favor, informe o código do ticket")
        } else {
            const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/tickets/" + numeroTicket + ".json"
            setExibirCarregando(true)
            const resposta = await fetch(url)
            const respostaJson = await resposta.json()
            setExibirCarregando(false)
            let ticketEncontrado = null
            if (respostaJson === null) {
                alert.error("Nenhum ticket encontrado com o código " + numeroTicket)
            } else {
                ticketEncontrado = {
                    codigo: numeroTicket,
                    municipio: respostaJson.municipio,
                    parceiroValidou: respostaJson.parceiroValidou
                }
            }
            setTicketEncontrado(ticketEncontrado)
        }
    }

    function detalheTicket() {
        if (ticketEncontrado) {
            let status = "Aguardando validação..."
            if(ticketEncontrado.parceiroValidou) {
                status = "Ticket validado por um parceiro, liberado para retirada do responsável"           
            } 
            return (
                <div className="card" style={{ maxWidth: "25rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{ticketEncontrado.codigo}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{status}</h6>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Cabecalho />
            <Carregando exibir={exibirCarregando} />
            <div className="container">
                <FormularioConsultarTicket
                    numeroTicket={numeroTicket}
                    aoAlterarNumeroTicket={aoAlterarNumeroTicket}
                    aoConsultar={aoClicarConsultarTicket}
                />

                {detalheTicket()}
            </div>
        </>
    )
}