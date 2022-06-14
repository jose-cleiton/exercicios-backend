const radline = require('readline-sync');





const calculaImc = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
}

// A função main é o ponto de partida do nosso programa 
const main = () => {
  const PESO_PADRAO_EM_KG = parseFloat(radline.question('Peso: '));
  const ALTURA_PADRAO_EM_CM = parseFloat(radline.question('Altura: '));


  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();


