class Person {
  constructor(name) {
    this._name = name; // {1}
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
let lotrChar = new Person('Frodo');
console.log(lotrChar.name); // {4}
lotrChar.name = 'Gandalf'; // {5}
console.log(lotrChar.name);
lotrChar.name = 'Sam'; // {6}
console.log(lotrChar.name);

