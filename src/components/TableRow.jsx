import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row }) => {
  return (
    <tr>
      {row.map((cell, colIndex) => (
        <TableCell key={colIndex} />
      ))}
    </tr>
  );
};

export default TableRow;
