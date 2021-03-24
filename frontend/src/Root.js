import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Doador from "./Doador";

export default function Root() {
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
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
  