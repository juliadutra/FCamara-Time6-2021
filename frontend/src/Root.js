import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import App from "./App";
import Doador from "./Doador";
import Sobre from "./Sobre";
import Projeto from "./Projeto";

export default function Root() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/sobre-nos">
                <Sobre />
            </Route>
            <Route path="/o-projeto">
                <Projeto />
            </Route>
            <Route path="/como-doar">
                <Doador />
            </Route>
            <Route path="/">
              <App />
            </Route>
          </Switch>
    
      </Router>
    );
  }
  