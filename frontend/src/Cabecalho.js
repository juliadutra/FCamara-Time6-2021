import React from "react"
import {Link} from "react-router-dom";


export default function Cabecalho() {
    return (

        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <h1>Logo</h1>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-principal">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="nav-principal" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto" id="navegacao">
                            <li className="home nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/projeto">O Projeto</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/como-doar">Como Doar</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/parceiros">Parceiros</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/fale-conosco">Fale Conosco</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    )
}