const fs = require('fs')

console.time('Run Time')

const input1 = fs.readFileSync('input1.txt', { encoding: 'utf-8' }).split('\n')[0]
const input2 = fs.readFileSync('input1.txt', { encoding: 'utf-8' }).split('\n')[1]
//const test1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72']
//const test2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
const traceWire = wire => {
   const steps = [[0, 0, 0]]

   for (let i = 0; i < wire.length; i++) {
      if (wire[i][0] === 'R') {
         for (let j = 1; j <= Number(wire[i].slice(1)); j++) {
            steps.push([
               steps[steps.length - 1][0] + 1,
               steps[steps.length - 1][1],
               steps[steps.length - 1][2] + 1
            ])
         }
      } else if (wire[i][0] === 'L') {
         for (let j = 1; j <= Number(wire[i].slice(1)); j++) {
            steps.push([
               steps[steps.length - 1][0] - 1,
               steps[steps.length - 1][1],
               steps[steps.length - 1][2] + 1
            ])
         }
      } else if (wire[i][0] === 'U') {
         for (let j = 1; j <= Number(wire[i].slice(1)); j++) {
            steps.push([
               steps[steps.length - 1][0],
               steps[steps.length - 1][1] + 1,
               steps[steps.length - 1][2] + 1
            ])
         }
      } else if (wire[i][0] === 'D') {
         for (let j = 1; j <= Number(wire[i].slice(1)); j++) {
            steps.push([
               steps[steps.length - 1][0],
               steps[steps.length - 1][1] - 1,
               steps[steps.length - 1][2] + 1
            ])
         }
      }
   }

   return steps
}

//PART 1
const findCross = (wire1, wire2) => {
   wire1.sort((a, b) => Math.abs(a[0]) + Math.abs(a[1]) - (Math.abs(b[0]) + Math.abs(b[1])))
   wire1.sort((a, b) => Math.abs(a[0]) + Math.abs(a[1]) - (Math.abs(b[0]) + Math.abs(b[1])))
   for (i = 0; i < wire1.length; i++) {
      for (j = 0; j < wire2.length; j++) {
         if (wire1[i][0] === wire2[j][0] && wire1[i][1] === wire2[j][1] && wire1[i][1] != 0) {
            return Math.abs(wire1[i][0]) + Math.abs(wire1[i][1])
         }
      }
   }
}

//PART2

const findCross2 = (wire1, wire2) => {
   const crosses = []
   for (i = 0; i < wire1.length; i++) {
      for (j = 0; j < wire2.length; j++) {
         if (wire1[i][0] === wire2[j][0] && wire1[i][1] === wire2[j][1] && wire1[i][1] != 0) {
            crosses.push(wire1[i][2] + wire2[j][2])
         }
      }
   }
   crosses.sort((a, b) => a - b)
   return crosses[0]
}

console.log(findCross(traceWire(input1), traceWire(input2)))
console.log(findCross2(traceWire(input1), traceWire(input2)))

console.timeEnd('Run Time')