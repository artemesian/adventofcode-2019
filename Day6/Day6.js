const fs = require("fs");
const input = fs.readFileSync("./input1.txt").toString("utf-8").split('\n');
let mapOrbits = input.map(orbit => {
  orbitArray = orbit.split(')');

  return { name: orbitArray[1], whoOrbits: orbitArray[0], orbitsCountUntilObject: null };
});

const getSpaceObjectByName = (name, mapOrbits) => {
  for (const spaceObject of mapOrbits) {
    if (spaceObject.name === name) {
      return spaceObject;
    }
  }
  return null;
};

const printMapOrbits = (spaceObject, mapOrbits) => {
  if (spaceObject === null) {
    return null;
  }

  return [].concat(
    [spaceObject.whoOrbits],
    printMapOrbits(getSpaceObjectByName(spaceObject.whoOrbits, mapOrbits), mapOrbits)
  );
};

const calcOrbitsUntilObject = (spaceObject, mapOrbits) => {
  if (spaceObject === null) {
    return 0;
  }

  if (spaceObject.orbitsCountUntilObject === null) {
    spaceObject.orbitsCountUntilObject = 1 + calcOrbitsUntilObject(getSpaceObjectByName(spaceObject.whoOrbits, mapOrbits), mapOrbits);
  }

  return spaceObject.orbitsCountUntilObject;
};

const totalOrbits = mapOrbits => {
  let count = 0;

  for (const spaceObject of mapOrbits) {
    count += calcOrbitsUntilObject(spaceObject, mapOrbits);
  }

  return count;
};

console.time('part1');
console.log(totalOrbits(mapOrbits));
console.timeEnd('part1');

const minOrbitalTransfers = (spaceObject1_name, spaceObject2_name, mapOrbits) => {
  const spaceObject1 = getSpaceObjectByName(spaceObject1_name, mapOrbits);
  const spaceObject2 = getSpaceObjectByName(spaceObject2_name, mapOrbits);
  const orbitsMapSpaceObject1 = printMapOrbits(spaceObject1, mapOrbits);
  const orbitsMapSpaceObject2 = printMapOrbits(spaceObject2, mapOrbits);
  const numOrbitsSpaceObject1 = orbitsMapSpaceObject1.length;
  const numOrbitsSpaceObject2 = orbitsMapSpaceObject2.length;

  orbitsMapSpaceObject1.reverse();
  orbitsMapSpaceObject2.reverse();

  let identicalOrbits = 0;

  for (let i = 0; i < orbitsMapSpaceObject1.length; i++) {
    if (orbitsMapSpaceObject1[i] === orbitsMapSpaceObject2[i]) {
      identicalOrbits++;
    } else {
      break;
    }
  }

  return numOrbitsSpaceObject1 - identicalOrbits + numOrbitsSpaceObject2 - identicalOrbits;
};

console.time('part2');
console.log(minOrbitalTransfers('SAN', 'YOU', mapOrbits));
console.timeEnd('part2');
