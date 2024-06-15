var framework = 'Angular';
var framework = 'React';
console.log(framework);

let language = 'JavaScript!'; // {1}
let language = 'Ruby!'; // {2} - lança um erro
console.log(language);

const PI = 3.1415;
PI = 3.0; //lança um erro
console.log(PI);

const jsFramework = {
  name: 'Angular'
}
jsFramework.name = 'React';

// erro, não é possível atribuir outra referência ao objeto
jsFramework = {
  name: 'Vue'
};

