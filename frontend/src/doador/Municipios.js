import React from "react";

export default function Municipios(props) {
    if(props.lista == null) {
        return <div />
    } else if(props.lista.length === 0) {
        return <p>Infelizmente, não há nenhuma escola cadastradada nesta UF.</p>
    } else {
        return (
            <div className="mb-3">
                <label htmlFor="municipio" className="form-label">Selecione o Município</label>
                <select name="municipio" className="form-select col-6" onChange={props.onChange}>
                    <option value="">---</option>
                    {
                        props.lista.map((objeto) => (
                            <option key={objeto.codigo} value={objeto.codigo}>{objeto.nome}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}