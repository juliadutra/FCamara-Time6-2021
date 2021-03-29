import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import App from "./App";
import Doador from "./Doador";
import Sobre from "./Sobre";
import Projeto from "./Projeto";
import Parceiros from "./Parceiros";
import FaleConosco from "./FaleConosco";
import DoarKit from "./DoarKit";
import CadastrarPedido from "./CadastrarPedido";

export default function Root() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/sobre-nos">
                <Sobre />
            </Route>
            <Route path="/pedido-doacao">
                <CadastrarPedido />
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
                <DoarKit/>
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
    
      </Router>
    );
  }
  