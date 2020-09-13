import React from "react";
import "./styles/App.scss";
import Header from "./Header";
import Home from "./Home"

function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
