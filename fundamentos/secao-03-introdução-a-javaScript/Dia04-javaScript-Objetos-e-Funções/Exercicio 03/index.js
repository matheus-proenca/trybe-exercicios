let info = {
  personagem: 'Margarida e Tio patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
};


info["recorrente"] = "Ambos recorrentes";

console.log("Bem-vinda, " + info.personagem);
console.log(info.recorrente);

for (let i in info) {
  console.log(i);
}

for (let i in info) {
  console.log(info[i]);
}

for (let i in info) {
  console.log(i, info[i]);
}