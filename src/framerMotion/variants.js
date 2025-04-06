export const fadeIn = (direction = "up", delay = 0) => {
  const distance = 20; // Adjust distance for smoother motion

  // Determine movement based on the direction
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 }, // No movement
  };

  const { x, y } = directionMap[direction] || directionMap.none; // Default to 'none' if an invalid direction is passed

  return {
    hidden: {
      y: y, // Use direction for y-axis movement
      x: x, // Use direction for x-axis movement
      opacity: 0, // Start invisible
    },
    show: {
      y: 0, // End at 0 on y-axis
      x: 0, // End at 0 on x-axis
      opacity: 1, // Fully visible
      transition: {
        type: "tween",
        duration: 1,
        delay, // Apply delay for staggered effect
        ease: [0.42, 0, 0.58, 1], // Smoother easeInOut
      },
    },
  };
};
