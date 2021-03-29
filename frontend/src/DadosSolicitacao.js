import React, { useState } from "react";
import { validate } from 'gerador-validador-cpf';
import { useAlert } from "react-alert";

function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

export default function DadosSolicitacao() {
    const alert = useAlert()
    const [ cpf, setCPF ] = useState("")
    const [ cpfValido, setCPFValido ] = useState(true)
    function aoAlterarCPF(event) {
        const cpf = event.target.value
        const cpfValido = validate(cpf)
        setCPF(cpf)
        setCPFValido(cpfValido)
    }

    function aoClicarEmRecuperarSolicitacoes() {
        alert.show("Clicou em recuperar solicitações")
    }
    
    function aoClicarEmNovaSolicitacao() {
        alert.show("Clicou em nova solicitação")
    }


    const exibirMensagemCPFInvalido = cpf.length > 10 && !cpfValido
    return (
        <div className="card m-4">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Dados da Solicitação</h4>
            </div>
            <div className="card-body">
                <div>
                    <p>Digite o seu CPF para registrar uma nova solicitação de Kit Escolar ou para consultar solicitações já registradas</p>
                    <label htmlFor="cpf" className="form-label">Informe o seu CPF</label>
                    <input
                        type="text"
                        className="form-control"
                        style={{ maxWidth: 200 }}
                        maxLength={14}
                        onChange={aoAlterarCPF}
                        placeholder="Ex.: 078.840.390-79"
                        value={mascaraCpf(cpf)}
                    />
                    {
                        exibirMensagemCPFInvalido && (
                            <div className="mt-2 text-danger">
                                Por favor, informe um CPF válido
                            </div>
                        )
                    }

                    <button className="btn btn-primary" onClick={aoClicarEmRecuperarSolicitacoes}>
                        Recuperar Solicitações
                    </button>
                    <button className="btn btn-primary" onClick={aoClicarEmNovaSolicitacao}>
                        Nova Solicitação
                    </button>
                    
                </div>
            </div>
        </div>
    )

}