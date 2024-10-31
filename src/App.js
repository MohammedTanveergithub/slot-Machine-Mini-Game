import React from "react";
import SlotMachine from "./components/SlotMachine";
import items from "./data/items";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Slot Machine Mini-Game</h1>
      <SlotMachine />
    </div>
  );
}

export default App;
