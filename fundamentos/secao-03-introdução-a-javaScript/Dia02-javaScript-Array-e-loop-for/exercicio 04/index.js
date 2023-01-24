let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

media = soma / numbers.length;

console.log("Valor da soma:", soma);
console.log("valor da media:", media);

if (media >= 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor que 20")
}

let maiorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] >= Math.max(...numbers)) {
    maiorNumero = numbers[index];
  }
}

console.log("o maior numero é:", maiorNumero);

let menorNumero = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] >= Math.min(numbers)) {
    menorNumero = numbers[index];
  }
}

console.log("O menor numero é:", menorNumero);

for (let index = 0; index < numbers.length; index += 1) {

  if ((numbers[index] % 2) === 1) {
    console.log("são impares:", numbers[index]);
  } else {
    console.log("são pares:", numbers[index])
  }
}

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);

}

console.log(array);

for (let index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
};


