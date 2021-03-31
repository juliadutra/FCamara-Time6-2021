import React, { useState } from "react"
import Cabecalho from "../Cabecalho"
import { useAlert } from "react-alert"
import Carregando from "../Carregando"
import FormularioConsultarTicket from "./FormularioConsultarTicket"

export default function ValidarDoacao() {
    const [numeroTicket, setNumeroTicket] = useState("")
    const [exibirCarregando, setExibirCarregando] = useState(false)
    const alert = useAlert()
    function aoAlterarNumeroTicket(evento) {
        setNumeroTicket(evento.target.value)
    }

    async function aoClicarConsultarTicket() {
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/tickets/" + numeroTicket + ".json"
        setExibirCarregando(true)
        const resposta = await fetch(url)
        const respostaJson = await resposta.json()
        setExibirCarregando(false)
        if(respostaJson === null) {
            alert.error("Nenhum ticket encontrado com o código " + numeroTicket)
        } else {
            alert.info("Ticket encontrado: " + JSON.stringify(respostaJson))
        }
    }

    return (
        <>
            <Cabecalho />
            <Carregando exibir={exibirCarregando} />
            <FormularioConsultarTicket
                numeroTicket={numeroTicket}
                aoAlterarNumeroTicket={aoAlterarNumeroTicket}
                aoConsultar={aoClicarConsultarTicket}
            />
        </>
    )
}