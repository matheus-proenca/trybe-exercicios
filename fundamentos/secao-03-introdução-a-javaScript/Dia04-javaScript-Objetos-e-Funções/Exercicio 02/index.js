let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log("olá", names[index]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index, car[index]);
}


function soma(a, b) {
  return a + b;
}

console.log(soma(20, 40));

function subtracao(a, b) {
  return a - b;
}

console.log(subtracao(20, 40));

function multiplicacao(a, b) {
  return a * b;
}

console.log(multiplicacao(20, 40));

function divisao(a, b) {
  return a / b;
}

console.log(divisao(20, 40));

function soma(a, b) {
  return a % b;
}

console.log(soma(20, 3));



function maiorOuMenor(a, b) {
  if (a > b) {
    return a + " é maior que " + b;
  } else
    return a + " é menor que " + b;
}

console.log(maiorOuMenor(30, 50))
console.log(maiorOuMenor(30, 20))


function num(numero) {
  if (numero > 0) {
    return "positive";
  } else if (numero < 0) {
    return "negative"
  } else
    return "Zero";

}

console.log(num(0))
