import React from "react"
import UFs from "./UFs"
import Municipios from "./Municipios"
import OpcaoEscolaEspecifica from "./OpcaoEscolaEspecifica"
import NumeroKits from "./NumeroKits"

export default function FormularioGeracaoTickets(props) {
    return (
        <div>
            <UFs onChange={props.aoAlterarUF} />
            <Municipios lista={props.municipiosDaUF} onChange={props.aoAlterarMunicipio} />
            {
                props.municipioSelecionado && (
                    <>
                        <OpcaoEscolaEspecifica
                            valorAtual={props.seEscolaEspecifica}
                            aoClicarSim={props.aoClicarSimEscolaEspecifica}
                            aoClicarNao={props.aoClicarNaoEscolaEspecifica}
                        />

                        <NumeroKits
                            valorAtual={props.numeroKits}
                            onChange={props.aoAlterarNumeroKits}
                        />

                        <button
                            type="button"
                            class="btn btn-success btn-lg"
                            onClick={props.aoClicarEmGerarTickets}>
                            Gerar Tickets de Doação
                        </button>

                    </>
                )
            }
        </div>
    )
}