function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
distanceFromHqInFeet(); 

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264;
}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(start - destination);
  let travel = distance * 264;
  if (travel <= 400) {
    return 0;
  }
  else if (travel > 400 && travel <=2000) {
    return (travel - 400)*0.02;}
  else if (travel > 2000 && travel <=2500) {
      return (25);}
  else if (travel > 2500) {
    return 'cannot travel that far';}
}
calculatesFarePrice()