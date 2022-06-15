
const { inputs, calculaVelocidadeMed, CauculoVelocidadeMedia } = require('./helprs');

const d =new inputs().perguntaDistancia();

const t = new inputs().perguntaTempo();

const resp = new CauculoVelocidadeMedia(d, t).calculaVelocidadeMedia();

console.log(`Velocidade média: ${resp.toFixed(2)}`);
