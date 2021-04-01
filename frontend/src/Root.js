import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import App from "./App";
import Doador from "./doador/Doador";
import Sobre from "./Sobre";
import Projeto from "./Projeto";
import Parceiros from "./Parceiros";
import FaleConosco from "./FaleConosco";
import DoarKit from "./doador/DoarKit";
import CadastrarPedido from "./CadastrarPedido";
import ValidarDoacao from "./parceiro/ValidarDoacao";
import ConsultarTicket from "./doador/ConsultarTicket";
import Obrigado from "./Obrigado";

export default function Root() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/sobre-nos">
                <Sobre />
            </Route>
            <Route path="/obrigado">
                <Obrigado />
            </Route>
            <Route path="/pedido-doacao">
                <CadastrarPedido />
            </Route>
            <Route path="/validar-doacao">
                <ValidarDoacao />
            </Route>
            <Route path="/projeto">
                <Projeto />
            </Route>
            <Route path="/como-doar">
                <Doador />
            </Route>
            <Route path="/parceiros">
                <Parceiros />
            </Route>
            <Route path="/fale-conosco">
                <FaleConosco />
            </Route>
            <Route path="/doar-kit">
                <DoarKit />
            </Route>
            <Route path="/nome-indefinido">
                <NomeIndefinido/>
            </Route>
            <Route path="/consultar-ticket">
                <ConsultarTicket/>
            </Route>
            <Route path="/">
              <App />
            </Route>            
          </Switch>
    
      </Router>
    );
  }
  