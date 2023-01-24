const salarioBruto = 3000;

if (salarioBruto <= 1556) {
  const inss = (salarioBruto * 8) / 100;
  const salarioReceber = salarioBruto - inss
  console.log(salarioReceber)
} else if (salarioBruto >= 1557 && salarioBruto <= 2594) {
  const inss = (salarioBruto * 9) / 100;
  const imposto = 142;
  const ir = ((salarioBruto * 7.5) / 100) - imposto;
  const salarioReceber = salarioBruto - inss - ir;
  console.log(salarioReceber)
} else if (salarioBruto >= 2595 && salarioBruto <= 5189) {
  const inss = (salarioBruto * 11) / 100;
  const imposto = 354;
  const ir = ((salarioBruto * 15) / 100) - imposto;
  const salarioReceber = salarioBruto - inss - ir;
  console.log(salarioReceber)
} else if (salarioBruto >= 5190) {
  const inss = 570
  const imposto = 869;
  const ir = ((salarioBruto * 27.5) / 100) - imposto;
  const salarioReceber = salarioBruto - inss - ir;
  console.log(salarioReceber)
}