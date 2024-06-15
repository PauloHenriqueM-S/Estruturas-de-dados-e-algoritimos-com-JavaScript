let params = [3, 4, 5];
console.log(sum(...params));

console.log(sum.apply(undefined, params)); // ES5

function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

function restParameterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'Hello', true, 7));
