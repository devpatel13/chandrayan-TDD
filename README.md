# Chandrayaan Navigation

## Description
This program helps the Chandrayaan spacecraft navigate through the galaxy using galactic coordinates (x, y, z). The spacecraft receives commands from Earth, and it can move forward/backward, turn left/right, and rotate up/down based on its initial direction.

## Requirements
- Node.js with Jest for running tests

## Installation
1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Install the required dependencies by running `npm install`.

## Usage
1. Navigate to the project directory in your terminal.
2. Modify the initial position, initial direction, and commands in the `navigateSpacecraft` function call in the `index.js` file.
3. To execute the program, run `npm start` in your terminal.

## Tests
We have included tests to ensure the correctness of the navigation functions. To run the tests, use the command `npm test`. The tests cover the following scenarios:
- Validation of initial position (x, y, z) data types.
- Checking for valid commands in the given list of commands.
- Testing the rotation and movement functions.

## Implementation Details
- The `directions` object is used to define the direction mapping for each direction (N, S, E, W, Up, Down).
- The `rotate` function rotates the spacecraft based on the given command and the current direction.
- The `move` function moves the spacecraft based on the current direction and the given step value (1 for forward, -1 for backward).

## Note
- The spacecraft's initial direction (N, S, E, W, Up, Down) represents the reference frame for movement and rotation.
- The spacecraft cannot move or rotate diagonally; it can only move in the direction it is currently facing.
- Assume that the spacecraft's movement and rotations are rigid and it cannot move beyond the galactic boundaries.

Feel free to modify the initial conditions and commands to observe different spacecraft movements in space!
