import React from "react";

export default function Carregando(props) {
    return props.exibir && (
        <div
            className="modal"
            style={{
                display: "inline-block",
                backgroundColor: "grey",
                opacity: 0.5
            }}>
            <div className="modal-body">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </div>
        </div>
    )
}