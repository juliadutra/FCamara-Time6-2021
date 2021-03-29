import React from "react";

export default function OpcaoEscolaEspecifica(props) {
    let classesBotaoSim = "btn "
    let classesBotaoNao = "btn "

    if (props.valorAtual === null) {
        classesBotaoSim = classesBotaoSim + " btn-outline-dark"
        classesBotaoNao = classesBotaoNao + " btn-outline-dark"
    } else if(props.valorAtual) {
        classesBotaoSim = classesBotaoSim + " btn-primary"
        classesBotaoNao = classesBotaoNao + " btn-outline-dark"
    } else {
        classesBotaoSim = classesBotaoSim + " btn-outline-dark"
        classesBotaoNao = classesBotaoNao + " btn-primary"
    }
    return (
        <>
            <label className="form-label">Deseja doar para uma escola específica deste município?</label>
            <div className="mb-3">
                <button className={classesBotaoSim} onClick={props.aoClicarSim}>Sim</button>
                <button className={classesBotaoNao} onClick={props.aoClicarNao}>Não</button>
            </div>
        </>
    )
}

