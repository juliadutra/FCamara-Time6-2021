import React from "react";

export default function NumeroKits(props) {
    return (
        <div className="mb-3">
            <label className="form-label">Quantos Kits deseja doar?</label>
            <input
                value={props.valorAtual}
                onChange={props.onChange}
                type="number"
                className="form-control"
                style={{ maxWidth: 100 }}
            />
        </div>
    )
}