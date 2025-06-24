export function fillAll(grid, color) {
  return grid.map(row => row.map(() => color));
}
