function configDataBody(str) {
  const array = str.split("\n=====\n");
  return array;
}

function configDataNewline(str) {
  console.log(str);
  const array = str.split("\n");
  console.log(array);
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

export { configDataBody, sortByPri, configDataNewline };
