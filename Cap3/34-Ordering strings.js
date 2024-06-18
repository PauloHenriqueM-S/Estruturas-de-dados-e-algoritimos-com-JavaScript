let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort()); // ['Ana', 'John', 'ana', 'john']

// Para obter mais informações sobre a tabela ASCII, acesse http://www.asciitable.com.

names = ['Ana', 'ana', 'john', 'John']; // inicia o array com o estado original
console.log(names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}));

names.sort((a, b) => a.localeCompare(b));

const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));

