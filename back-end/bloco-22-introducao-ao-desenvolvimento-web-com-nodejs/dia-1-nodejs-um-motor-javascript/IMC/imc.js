
const PESO_PADRAO_EM_KG = 80; // Você pode utilizar o valor que desejar aqui
const ALTURA_PADRAO_EM_CM = 178; // Você pode utilizar o valor que desejar aqui

const calculaImc = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
}

// A função main é o ponto de partida do nosso programa 
const main = () => {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();