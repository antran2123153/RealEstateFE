function arrayRotate(arr) {
  arr.push(arr.shift());
  return arr;
}

function configData(str) {
  const array = str.split("\n||");
  return array;
}

function sortByPri(a, b) {
  if (a.priority > b.priority) {
    return -1;
  } else if (a.priority < b.priority) {
    return 1;
  }
  return 0;
}

export { arrayRotate, configData, sortByPri };
