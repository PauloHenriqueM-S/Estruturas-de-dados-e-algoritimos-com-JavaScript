let aEntries = numbers.entries(); // obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log(aEntries.next().value); // [1, 2] - posição  1, valor 2
console.log(aEntries.next().value); // [2, 3] - posição 2, valor 3

// Também podemos usar o código a seguir como uma alternativa ao código anterior:
aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

const aKeys = numbers.keys(); // obtém um iterador de chaves
console.log(aKeys.next().value); // {value: 0, done: false}
console.log(aKeys.next().value); // {value: 1, done: false}
console.log(aKeys.next().value); // {value: 2, done: false}

const aValues = numbers.values();
console.log(aValues.next().value); // {value: 1, done: false}
console.log(aValues.next().value); // {value: 2, done: false}
console.log(aValues.next().value); // {value: 3, done: false}