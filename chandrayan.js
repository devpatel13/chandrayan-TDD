function navigateChandrayan(initialPosition, initialDirection, commands) {
  // Define the direction mapping for each direction
  const directions = {
    N: { l: "W", r: "E", u: "U", d: "D" },
    E: { l: "N", r: "S", u: "U", d: "D" },
    W: { l: "S", r: "N", u: "U", d: "D" },
    S: { l: "E", r: "W", u: "U", d: "D" },
    U: { l: "W", r: "E", u: "S", d: "N" },
    D: { l: "W", r: "E", u: "N", d: "S" },
  };

  // Initialize the current position and direction
  let currentPosition = { ...initialPosition };
  let currentDirection = initialDirection;

  function rotate(currentDirection, command) {
    return directions[currentDirection][command];
  }

  function move(currentPosition, currentDirection, val) {
    if (
      currentDirection == "S" ||
      currentDirection == "W" ||
      currentDirection == "D"
    ) {
      val *= -1;
    }
    if (currentDirection == "N" || currentDirection == "S") {
      currentPosition.y += val;
    } else if (currentDirection == "E" || currentDirection == "W") {
      currentPosition.x += val;
    } else {
      currentPosition.z += val;
    }
    return currentPosition;
  }

  // Process each command in the array
  for (const command of commands) {
    if (command == "f") {
      currentPosition = move(currentPosition, currentDirection, 1);
    } else if (command == "b") {
      currentPosition = move(currentPosition, currentDirection, -1);
    } else {
      currentDirection = rotate(currentDirection, command);
    }
  }

  return { position: currentPosition, direction: currentDirection };
}

// Example usage:
const initialPosition = { x: 0, y: 0, z: 0 };
const initialDirection = "N";
const commands = ["f", "r", "u", "b", "l"];
const result = navigateChandrayan(initialPosition, initialDirection, commands);
console.log("Final Position:", result.position);
console.log("Final Direction:", result.direction);
