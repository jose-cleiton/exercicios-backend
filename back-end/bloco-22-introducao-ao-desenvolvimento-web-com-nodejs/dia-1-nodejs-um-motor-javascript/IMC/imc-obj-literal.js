const radline = require('readline-sync');
const { calculaImc, calculaSituacao, IMC_MAXIMO_E_MINIMO_POR_SITUACAO } = require('./helprs');


const PESO_PADRAO_EM_KG = parseFloat(radline.question('Peso: '));

const ALTURA_PADRAO_EM_CM = (parseFloat(radline.question('Altura: ')));



const main = () => {


  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  const grauPeso = calculaSituacao(imc);
  
  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Voçê está com : ${grauPeso}`);





}


main(); 75











