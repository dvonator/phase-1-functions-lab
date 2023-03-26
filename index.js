// Code your solution in this file!

function distanceFromHqInBlocks(blockDistance) {
  let pickUpLocation = 42;
  if (blockDistance < 42) {
    return pickUpLocation - blockDistance;
  }

  return blockDistance - pickUpLocation;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blockDistance) {
  let pickUpLocation = 42;
  if (blockDistance < 42) {
    return (pickUpLocation - blockDistance) * 264;
  }
  return (blockDistance - pickUpLocation) * 264;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  }
  return (start - destination) * 264;
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  let hardTest = Math.abs(destination - start) * 264;
  if (hardTest <= 400) {
    return 0;
  }
  if (hardTest > 400 && hardTest < 2000) {
    return (hardTest - 400) * 0.02;
  }
  if (hardTest > 2000 && hardTest <= 2500) {
    return 25;
  }
  if (hardTest > 2500) {
    return "cannot travel that far";
  }
}
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
