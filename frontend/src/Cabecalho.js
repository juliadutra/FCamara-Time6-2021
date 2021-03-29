import React from "react"
import {Link} from "react-router-dom";


export default function Cabecalho() {
    return (

        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#controleNavegacao" aria-controls="controleNavegacao" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">
                    <h1>Logo</h1>
                </Link>
                <div class="collapse navbar-collapse" id="controleNavegacao">
                <ul id="navegacao" class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="home nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
                    <li className="projeto nav-item"><Link className="nav-link" to="/projeto">O Projeto</Link></li>
                    <li className="doador nav-item"><Link className="nav-link" to="/como-doar">Como Doar</Link></li>
                    <li className="parceiros nav-item"><Link className="nav-link" to="/parceiros">Parceiros</Link></li>
                    <li className="faleconosco nav-item"><Link className="nav-link" to="/fale-conosco">Fale Conosco</Link></li>
                </ul>                
                </div>
            </div>
        </nav>
        </header>


    )
}