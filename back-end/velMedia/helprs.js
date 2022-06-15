class CauculoVelocidadeMedia {
  constructor(velocidade, tempo) {
    this.velocidade = velocidade;
    this.tempo = tempo;
  }


  calculaVelocidadeMedia () {
    const { velocidade, tempo } = this;
    return velocidade / tempo;
  }

}
class inputs {
  constructor() {
    this.readline = require('readline-sync');
  }

  perguntaDistancia () {
    const distanciaPercorrida = this.readline.questionInt('Distância percorrida (m): ');

    return distanciaPercorrida;
  }

  perguntaTempo () {
    const tempoGasto = this.readline.questionInt('Tempo gasto (s): ');

    return tempoGasto;
  }

}


module.exports = {
  CauculoVelocidadeMedia,
  inputs

}




