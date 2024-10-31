import React, { useState } from "react";
import Reel from "./Reel";
import SpinButton from "./SpinButton";
import items from "../data/items";

function SlotMachine() {
  const [result, setResult] = useState([]);
  const [isRolling, setIsRolling] = useState([false, false, false]);

  const spinReels = () => {
    setIsRolling([true, true, true]);

    // Generate random results for each reel
    const spins = [];
    for (let i = 0; i < 3; i++) {
      const itemIndex = Math.floor(Math.random() * items.length);
      const selectedItem = items[itemIndex];
      spins.push(selectedItem);
    }
    setResult(spins);

    // Staggered stop animation for each reel
    setTimeout(() => setIsRolling([false, true, true]), 800);
    setTimeout(() => setIsRolling([false, false, true]), 1200);
    setTimeout(() => setIsRolling([false, false, false]), 1600);
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        {result.map((item, index) => (
          <Reel key={index} item={item} isRolling={isRolling[index]} />
        ))}
      </div>
      <SpinButton spin={spinReels} />
      <div className="reward-display">
        <h3>Reward:</h3>
        {result.map((item, index) => (
          <div key={index}>
            {item.type} - {item.rarity} - x{item.count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotMachine;
