import { circleArea, squareArea } from "./12-CalcArea";
console.log(circleArea(2));
console.log(squareArea(2));

// import { circleArea } from "./12-CalcArea";

// import {circleArea as circle} from './12-CalcArea';

import { circle, square } from "./12-CalcArea";

import * as area from './12-CalcArea';
console.log(area.circle(2));
console.log(area.square(2));

import Book from './12-Book';
const myBook = new Book('some title');
myBook.printTitle();