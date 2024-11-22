import React from "react";
import "./App.css";
import AvtCanvas from "./components/Canvas";
import MovingCar from "./components/MovingCar";
import MovingText from "./components/MovingText";

function App() {
  // Define shared position
  const linePosition: [number, number, number] = [-10, -2, 1]; // Adjust the Y-axis (-2) as needed

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px", color: "white" }}>
        Lal Kurti Fare: 500rs
      </h1>
      <AvtCanvas>
        <MovingCar
          position={[linePosition[0], linePosition[1] + 1.5, linePosition[2]]}
        />
        <MovingText position={linePosition} />
      </AvtCanvas>
    </>
  );
}

export default App;
