import React from "react"
import {Link} from "react-router-dom";
import './Cabecalho.css';
import logoPrincipal from './Imagens/logoPrincipal.png';


export default function Cabecalho() {
    return (

    <header id="cabecalho">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#controleNavegacao" aria-controls="controleNavegacao" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-1x"></i>
                </button>
                <Link className="navbar-brand" to="/">
                    <img src={logoPrincipal} width="100" height="100" alt="Padrinhos do Bem"/>
                </Link>
                <div className="collapse navbar-collapse" id="controleNavegacao">
                <ul id="navegacao" className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="sobreNos nav-item"><Link className="nav-link" to="/sobre-nos">Sobre Nós</Link></li>
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