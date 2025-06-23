import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import Table from "./components/Table";
import "./style.css";

const App = () => {
  const [grid, setGrid] = useState([[""]]);

  const addRow = () => {
    const newRow = new Array(grid[0].length).fill("");
    setGrid([...grid, newRow]);
  };

  const addColumn = () => {
    const newGrid = grid.map(row => [...row, ""]);
    setGrid(newGrid);
  };

  const removeRow = () => {
    if (grid.length > 1) {
      setGrid(grid.slice(0, -1));
    }
  };

  return (
    <div className="app">
      <h1>React Grid</h1>
      <div className="controls">
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeRow}>Remove Row</button>
      </div>
      <Table grid={grid} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);