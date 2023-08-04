function rotate(currentDirection, command) {
  const directions = {
    N: { l: "W", r: "E", u: "U", d: "D" },
    E: { l: "N", r: "S", u: "U", d: "D" },
    W: { l: "S", r: "N", u: "U", d: "D" },
    S: { l: "E", r: "W", u: "U", d: "D" },
    U: { l: "W", r: "E", u: "S", d: "N" },
    D: { l: "W", r: "E", u: "N", d: "S" },
  };
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

describe("Tests for navigateChandrayan arguments", () => {
  test("Testing initial position", () => {
    const initialPosition = { x: 0, y: 0, z: 0 };

    expect(typeof initialPosition.x).toBe("number");
    expect(typeof initialPosition.y).toBe("number");
    expect(typeof initialPosition.z).toBe("number");
  });
  test("Test if command is Empty", () => {
    const commands = ["f", "r", "u", "b", "l"];
    const empty = [];
    expect(commands).not.toEqual(empty);
  });
});

describe("Tests for directions in space", () => {
  test("Testing directions", () => {
    const directions = {
      N: { l: "W", r: "E", u: "U", d: "D" },
      E: { l: "N", r: "S", u: "U", d: "D" },
      W: { l: "S", r: "N", u: "U", d: "D" },
      S: { l: "E", r: "W", u: "U", d: "D" },
      U: { l: "W", r: "E", u: "S", d: "N" },
      D: { l: "W", r: "E", u: "N", d: "S" },
    };
    expect(directions["N"]["l"]).toBe("W");
  });
});

describe("Test for executing commands", () => {
  test("Test if command is Empty", () => {
    const commands = ["f", "r", "u", "b", "l"];
    const preDefCommands = ["f", "r", "u", "b", "l"];
    let failed = false;
    for (command of commands) {
      if (preDefCommands.indexOf(command) == -1) {
        failed = true;
        break;
      }
    }
    expect(failed).toBe(false);
  });
});

describe("Test for rotate and move functions", () => {
  test("Test rotate functions", () => {
    const currentDirection = "N";
    expect(rotate(currentDirection, "l")).toBe("W");
  });
});

// A test is just a function whose arguments define the test.

// Specifications define what our code should do and are ultimately
// what we test.
