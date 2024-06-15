let [x, y] = ['a', 'b'];

let x = 'a';
let y = 'b'; // mesmo que o exemplo acima

[x, y] = [y, x];

var temp = x;
x = y;
y = temp;

let [x, y] = ['a', 'b'];
let obj = { x: x, y: y };
console.log(obj); // {x: 'a', y: 'b'}

const hello = {
  name: 'abcdef',
  printHello() {
    console.log('Hello');
  }
};
console.log(hello.printHello());

var hello = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log('Hello');
  }
};
console.log(hello.printHello());