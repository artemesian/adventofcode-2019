const fs = require("fs");
const input = fs.readFileSync("./input1.txt").toString("utf-8");
const INPUT = 1;
const compute = input => {
  let inputString = input.toString();
  if (inputString.length === 1) inputString = "0" + inputString;
  const opcode = Number(inputString.slice(-2));
  const instructionLength =
    opcode === 2 || opcode === 1 || opcode === 7 || opcode === 8
      ? 4
      : opcode === 3 || opcode === 4
      ? 2
      : opcode === 5 || opcode === 6
      ? 3
      : 1;

  const modeArray =
    "0".repeat(instructionLength - 1 - (inputString.length - 2)) +
    inputString.slice(0, inputString.length - 2);
  return { instructionLength, modeArray, opcode };
};
const computeCode = input => {
  let inputArray = input.split(",").map(num => Number(num));
  let i = 0;
  let output;
  while (i < inputArray.length) {
    let { opcode, modeArray, instructionLength } = compute(
      inputArray[i]
    );

    if (opcode === 1) {
      inputArray[inputArray[i + 3]] =
        inputArray[modeArray[2] === "0" ? inputArray[i + 1] : i + 1] +
        inputArray[modeArray[1] === "0" ? inputArray[i + 2] : i + 2];
    } else if (opcode === 2) {
      inputArray[inputArray[i + 3]] =
        inputArray[modeArray[2] === "0" ? inputArray[i + 1] : i + 1] *
        inputArray[modeArray[1] === "0" ? inputArray[i + 2] : i + 2];
    } else if (opcode === 3) {
      inputArray[modeArray[0] === "0" ? inputArray[i + 1] : i + 1] = INPUT;
    } else if (opcode === 4) {
      output = inputArray[modeArray[0] === "0" ? inputArray[i + 1] : i + 1];
    } else if (opcode === 5) {
      instructionLength =
        inputArray[modeArray[1] === "0" ? inputArray[i + 1] : i + 1] === 0
          ? instructionLength
          : 0;
      i =
        instructionLength === 0
          ? modeArray[0] === "0"
            ? inputArray[inputArray[i + 2]]
            : inputArray[i + 2]
          : i;
    } else if (opcode === 6) {
      instructionLength =
        inputArray[modeArray[1] === "0" ? inputArray[i + 1] : i + 1] !== 0
          ? instructionLength
          : 0;
      i =
        instructionLength === 0
          ? modeArray[0] === "0"
            ? inputArray[inputArray[i + 2]]
            : inputArray[i + 2]
          : i;
    } else if (opcode === 7) {
      inputArray[inputArray[i + 3]] =
        inputArray[modeArray[2] === "0" ? inputArray[i + 1] : i + 1] <
        inputArray[modeArray[1] === "0" ? inputArray[i + 2] : i + 2]
          ? 1
          : 0;
    } else if (opcode === 8) {
      inputArray[inputArray[i + 3]] =
        inputArray[modeArray[2] === "0" ? inputArray[i + 1] : i + 1] ===
        inputArray[modeArray[1] === "0" ? inputArray[i + 2] : i + 2]
          ? 1
          : 0;
    } else if (inputArray[i] === 99) {
      return output;
    }
    i += instructionLength;
  }
};

console.log(computeCode(input));