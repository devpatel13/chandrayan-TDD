function testNavigateSpacecraft() {
  //
}

describe("Tests for navigateChandrayan", () => {
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

// A test is just a function whose arguments define the test.

// Specifications define what our code should do and are ultimately
// what we test.
