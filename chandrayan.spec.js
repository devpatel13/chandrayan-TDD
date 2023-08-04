function testNavigateSpacecraft() {
  //
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

// A test is just a function whose arguments define the test.

// Specifications define what our code should do and are ultimately
// what we test.
