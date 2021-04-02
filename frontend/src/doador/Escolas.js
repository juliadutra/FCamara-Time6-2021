import React from "react"

export default function Escolas(props) {
    if(props.lista == null) {
        return <div />
    } else if(props.lista.length === 0) {
        return <p>Infelizmente, não há nenhuma escola cadastradada neste município.</p>
    } else {
        return (
            <div className="mb-3">
                <label htmlFor="escola" className="form-label">Selecione a escola</label>
                <select name="escola" className="form-select col-6" onChange={props.onChange}>
                    <option value="">---</option>
                    {
                        props.lista.map((escola) => (
                            <option key={escola.codigo} value={escola.codigo}>{escola.nome}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}
