import { useCallback } from 'react';
import { mouseTracker } from './mousetracker';

export function mouseDragColor({ selectedColor, updateCell, rightClickColor = 'white' }) {
  const {
    isMouseDown,
    mouseDown,
    mouseUp,
    mouseLeave
  } = mouseTracker();

  // Left to paint, right to erase
  const paintCell = useCallback(
    (row, col, e) => {
      if (isMouseDown) {
        if (e.buttons === 1) {
          // Left click
          updateCell(row, col, selectedColor);
        } else if (e.buttons === 2) {
          // Right click
          updateCell(row, col, rightClickColor);
        }
      }
    },
    [isMouseDown, selectedColor, rightClickColor, updateCell]
  );

  // Allows for a single click
  const clickCell = useCallback(
    (row, col, e) => {
      if (e.button === 0) {
        updateCell(row, col, selectedColor);
      } else if (e.button === 2) {
        updateCell(row, col, rightClickColor);
      }
    },
    [selectedColor, rightClickColor, updateCell]
  );

  return {
    isMouseDown,
    mouseDown,
    mouseUp,
    mouseLeave,
    paintCell,
    clickCell
  };
}
