import React from "react"
import './Rodape.css'


export default function Rodape () {
    return (

        <footer id="rodape" className="d-flex bg-light">
           <div className="container align-self-center">
            <div className="row">
                <div className="col-md-6">
                    <p className="lead"><b>&copy; Todos os direitos reservados 2021.</b></p>
                </div>
                <div className="col-md-6">
                    <div>                    
                        <a href="#" className="btn btn-outline-dark"><i className="fab fa-facebook-square fa-1x"></i></a> &nbsp;
                        <a href="#" className="btn btn-outline-dark"><i className="fab fa-instagram-square fa-1x"></i></a> &nbsp;
                        <a href="#" className="btn btn-outline-dark"><i className="fab fa-twitter-square fa-1x"></i></a> &nbsp;
                        <a href="#" className="btn btn-outline-dark"><i className="fab fa-youtube-square"></i></a>
                    </div>
                </div>
            </div>
           </div>
        </footer>

    )
}