import React from "react";
import { Link } from "react-router-dom";
import { config } from "../util";

export default function Start() {
  return (
    <div id="Start">
      <h1>{config.gameTitle}</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
}
