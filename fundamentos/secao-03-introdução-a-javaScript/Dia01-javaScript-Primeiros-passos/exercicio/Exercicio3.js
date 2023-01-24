const valorCusto = 3;
const valorVenda = 10;
const imposto = (valorCusto * 20) / 100;

if (valorCusto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = valorCusto + imposto;
  const lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Erro, Não pode ser valores negativos");
}