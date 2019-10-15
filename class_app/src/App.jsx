import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <form>
      <input name="lhs" type="text" />
      <input name="rhs" type="text" />
      <input type="submit" value="Calculate" />
    </form>
  );
}

export default App;
