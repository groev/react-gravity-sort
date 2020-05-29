import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Game, Start, Lost } from "./components";
import { data } from "./util";

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
      <div className="image-cache">
        {data.items &&
          data.items.map((item, idx) => {
            if (item.backgroundImage)
              return <img key={idx} src={item.backgroundImage} alt="Cache" />;
            return "";
          })}
      </div>
    </div>
  );
}

export default App;
