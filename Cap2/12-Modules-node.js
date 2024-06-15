const area = require('./lib/12-CalcArea');
const Book = require('./lib/12-Book');
console.log(area.circle(2));
console.log(area.square(2));

const myBook = new Book('some title');
myBook.printTitle();

