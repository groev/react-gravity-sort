import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Game, Start, Lost } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/lost" component={Lost} />
          <Route path="/" component={Start} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
