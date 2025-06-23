import React from "react";
import TableRow from "./TableRow";

const Table = ({ grid }) => {
  return (
    <table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;