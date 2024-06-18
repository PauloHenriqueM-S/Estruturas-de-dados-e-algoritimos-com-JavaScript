numbers.reverse();

numbers.sort();

numbers.sort((a, b) => a - b);

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a deve ser igaul a b
  return 0;
}
numbers.sort(compare);
