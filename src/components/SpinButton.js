import React from "react";

function SpinButton({ spin }) {
  return (
    <button onClick={spin} className="spin-button">
      Spin!
    </button>
  );
}

export default SpinButton;
