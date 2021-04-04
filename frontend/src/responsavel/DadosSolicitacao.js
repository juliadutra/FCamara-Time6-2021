import React, { useState } from "react";
import { validate } from 'gerador-validador-cpf';
import { useAlert } from "react-alert";

function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
}

export default function DadosSolicitacao() {
    const alert = useAlert()
    const [ cpf, setCPF ] = useState("")
    const [ solicitacoes, setSolicitacoes ] = useState(null)
    function aoAlterarCPF(event) {
        const cpf = event.target.value
        setCPF(cpf)
    }

    async function aoClicarEmRecuperarSolicitacoes() {
        const cpfValido = validate(cpf)
        if (!cpfValido) {
            alert.error("O CPF informado não é válido")
            return
        }

        const cpfBuscar = cpf.replace(".", "").replace("-", "")
        const url = "https://doacao-de-material-escolar-default-rtdb.firebaseio.com/cpfs/" + cpf + ".json"
        const resultado = await fetch(url)
        const cpfJSON = await resultado.json()
        if (cpfJSON === null) {
            alert.error("Não há registro de solicitações para o CPF informado")
        } else {
            setSolicitacoes(cpfJSON.solicitacoes)
        }

    }
    
    function aoClicarEmNovaSolicitacao() {
        alert.show("Clicou em nova solicitação")
    }


    const exibirMensagemCPFInvalido = cpf.length > 10 && !validate(cpf)
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
                        style={{ maxWidth: 350 }}
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

                    <button className="btn btn-primary btn-sm btn-block" onClick={aoClicarEmRecuperarSolicitacoes}>
                        Recuperar Solicitações
                    </button>
                    <button className="btn btn-secondary btn-sm btn-block" onClick={aoClicarEmNovaSolicitacao}>
                        Nova Solicitação
                    </button>
                    
                </div>
            </div>
        </div>
    )

}