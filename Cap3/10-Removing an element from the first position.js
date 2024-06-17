for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      // console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }
  return newArray;
}
// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();