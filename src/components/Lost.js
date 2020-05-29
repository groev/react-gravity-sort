import React from "react";
import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div id="Start">
      <h1>You have lost!</h1>
      <Link to="/game">Restart Game</Link>
    </div>
  );
}
