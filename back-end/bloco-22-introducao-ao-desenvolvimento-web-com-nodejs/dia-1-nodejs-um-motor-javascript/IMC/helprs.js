const radline = require('readline-sync');



class CalculadoraDeImc {


  constructor() {
    this.IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
      'Abaixo do peso (magreza)': {
        imcMinimo: 0, // Um valor default mínimo qualquer, impossível de alcançar no imc.
        imcMaximo: 18.4,
      },
      'Peso normal': {
        imcMinimo: 18.5,
        imcMaximo: 24.9,
      },
      'Acima do peso (sobrepeso)': {
        imcMinimo: 25,
        imcMaximo: 29.9,
      },
      'Obesidade grau I': {
        imcMinimo: 30.0,
        imcMaximo: 34.9,
      },
      'Obesidade grau II': {
        imcMinimo: 35,
        imcMaximo: 39.9,
      },
      'Obesidade graus III e IV': {
        imcMinimo: 40,
        imcMaximo: 100 // Um valor default máximo qualquer, impossível de alcançar no imc.
      },
    };
  }



  teste () {
    const { IMC_MAXIMO_E_MINIMO_POR_SITUACAO } = this;
    console.log(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);
  }
  calculaImc (pesoEmKg, alturaEmMetros) {
    return (pesoEmKg / alturaEmMetros ** 2);
  }

  situacoesDoImc () {
    const { IMC_MAXIMO_E_MINIMO_POR_SITUACAO } = this;

    return Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);

  }

  limitesMaxMinSituacao (situacao) {
    const { IMC_MAXIMO_E_MINIMO_POR_SITUACAO } = this;
    const { imcMinimo, imcMaximo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao];
    return { imcMinimo, imcMaximo };
  }

  calculaSituacao (pesoEmKg, alturaEmMetros) {
    const imc = this.calculaImc(pesoEmKg, alturaEmMetros);
    const situacoes = this.situacoesDoImc();


    const situacaoEncontrada = situacoes.find((situacao) => {
      const { imcMinimo, imcMaximo } = this.limitesMaxMinSituacao(situacao);

      return imc >= imcMinimo && imc <= imcMaximo;
    });
    return { situacaoEncontrada, imc };

  }




}

class Nutricionista {
  constructor() {
    this.calculadora = new CalculadoraDeImc();
  }

  executaAnamnese () {
    const PESO_PADRAO_EM_KG = parseFloat(radline.question('Peso: '));
    const ALTURA_PADRAO_EM_CM = (parseFloat(radline.question('Altura: ')));


    const { situacaoEncontrada, imc } = this.calculadora.calculaSituacao(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);
    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Situação: ${situacaoEncontrada}`);

  }
}

module.exports = {
  Nutricionista
}