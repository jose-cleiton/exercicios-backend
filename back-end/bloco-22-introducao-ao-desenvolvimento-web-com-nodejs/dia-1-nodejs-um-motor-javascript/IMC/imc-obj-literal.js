console.clear()
const { Nutricionista } = require('./helprs');


const main = () => {
  new Nutricionista().executaAnamnese();
}


main(); 75