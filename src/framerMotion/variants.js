export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 16; // Smaller distance = smoother look

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directionMap[direction] || directionMap.none;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.33, 1, 0.68, 1], // Ease out with a smooth finish
      },
    },
  };
};
