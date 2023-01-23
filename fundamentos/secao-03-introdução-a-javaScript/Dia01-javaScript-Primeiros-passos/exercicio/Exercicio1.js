const num1 = 4;
const num2 = 5;
let result;

if (num1 > num2) {
  result = "é maior";
} else {
  result = "é menor";
}

console.log(result);


const num3 = 6;
let result2;

if (num1 > num2 && num1 > num3) {
  result2 = "Num 1 é maior";
} else if (num2 > num1 && num2 > num3) {
  result2 = "Num 2 é maior";

} else if (num1 == num2 || num2 == num3 || num1 == num3) {
  result2 = "São iguais"
}
else {
  result2 = "Num 3 é maior";
}

console.log(result2);

let soma = 10 - 10;
let result3;

if (soma < 0) {
  result3 = "negative";
} else if (soma > 0) {
  result3 = "positive";
} else {
  result3 = "zero"
}

console.log(result3, soma);

const trian1 = 60;
const trian2 = 60;
const trian3 = 600;
let triangulo;

if (trian1 + trian2 + trian3 === 180) {
  triangulo = true;
} else {
  triangulo = false;
}

console.log(triangulo);

let peca = "Rei";
switch (peca) {
  case "Cavalo":
    console.log("Cavalos andam em L");
    break

  case "Rei":
    console.log("Rei é a peça mais importante do xadrez,ele anda em todas as direçoes,porem apenas uma casa");
    break;

  case "Rainha":
    console.log("Rainha é a segunda peça mais importante do jogo,ele anda em todas as casa em quantas quiser");
    break;

  case "Torre":
    console.log("Torre anda em linha retas e quantas casas quiser");
    break;

  case "Bispo":
    console.log("anda nas diagonais");
    break;

  case "Peão":
    console.log("anda apenas uma casa e em linha reta,porem no seu primeiro movimento pode mover ate duas casas,os peoes so capturam peças em suas diagonais");
    break;

  default:
    console.log("Nao existe essa peça no xadrez");
}

let Porcentagem = 9;
let nota;

if (Porcentagem >= 90 && Porcentagem <= 100) {
  nota = "A";
} else if (Porcentagem >= 80 && Porcentagem <= 89) {
  nota = "B";
} else if (Porcentagem >= 70 && Porcentagem <= 79) {
  nota = "C";
} else if (Porcentagem >= 60 && Porcentagem <= 69) {
  nota = "D";
} else if (Porcentagem >= 50 && Porcentagem <= 59) {
  nota = "E";
} else if (Porcentagem < 50 && Porcentagem >= 0) {
  nota = "F";
} else {
  console.log("Essa porcentagem nao existe");
}

console.log("sua nota é :", nota);