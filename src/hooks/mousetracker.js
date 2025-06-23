// Logic to track if the mouse is being held down

import { useState, useCallback } from 'react';

export function mouseTracker() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  // The mouse has been pressed
  const mouseDown = useCallback(() => {
    setIsMouseDown(true);
  }, []);

  // The mouse was let go
  const mouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  // The mouse is no longer on the grid
  const mouseLeave = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  return {
    isMouseDown,
    mouseDown,
    mouseUp,
    mouseLeave
  };
}
