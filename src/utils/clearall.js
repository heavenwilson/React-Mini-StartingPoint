export function clearGrid(grid, defaultColor = "white") {
  return grid.map(row => row.map(() => defaultColor));
}
