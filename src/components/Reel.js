import React from "react";
import "./Reel.css";

function Reel({ item, isRolling }) {
  const itemImage = `/images/${item.type.toLowerCase()}.png`;

  return (
    <div className={`reel ${isRolling ? "rolling" : "stop-rolling"}`}>
      <div className="item-slot">
        <img src={itemImage} alt={item.type} className="item-image" />
        <h4>{item.type}</h4>
        <p className={`rarity ${item.rarity.toLowerCase()}`}>Rarity: {item.rarity}</p>
        <p>Count: x{item.count}</p>
      </div>
    </div>
  );
}

export default Reel;
