//informaçoes dadas pelo exercicio
const hoteis = ["Lakewood", "Bridgewood", "Ridgewood"];
const diasDaSemana = ["mon", "tues", "wed", "thur", "fri"];
const cliente = {};
const precos = {
  Lakewood: {
    Regular: {
      0: 110,
      1: 90,
    },
    Rewards: {
      0: 80,
      1: 80,
    },
  },
  Bridgewood: {
    Regular: {
      0: 160,
      1: 60,
    },
    Rewards: {
      0: 110,
      1: 50,
    },
  },
  Ridgewood: {
    Regular: {
      0: 220,
      1: 150,
    },
    Rewards: {
      0: 100,
      1: 40,
    },
  },
};
//funçao que define o perfil do cliente
const verifica = (entrada) => {
  const tipo = entrada.split(":"); //separa o tipo do cliente dos dias em que ele vai estar no hotel

  cliente["tipo"] = tipo[0]; //armazena o tipo do cliente
  cliente["dias"] = tipo[1].split(",").map((dia) => {
    //refina os dias para "mon","tues"...
    return dia.substring(dia.lastIndexOf("(") + 1, dia.lastIndexOf(")"));
  });
  cliente["dias"] = cliente["dias"].map((
    dia //estabelece se os dias em que o cliente vai ficar são dia de semana ou final de semana
  ) => (diasDaSemana.includes(dia) ? 0 : 1));
  return cliente;
};
//funçao que calcula o preço de cada hotel e devolve o mais barato
const calcula = () => {
  let precoFinal = hoteis.map((hotel) => {
    let preco = cliente["dias"].map((dia) => {
      //pega o preço dos dias em que o cliente estara em cada hotel
      return precos[hotel][cliente["tipo"]][dia];
    });
    return preco.reduce((a, b) => a + b); //retorna as somas dos preços dos dias
  });
  precoFinal = precoFinal.map((number, index) => {
    //retorna o/os hoteis mais baratos
    if (number === Math.min(...precoFinal)) return index;
    else return -1;
  });
  return precoFinal.indexOf(Math.max(...precoFinal)); //retorna o hotel mais barato com maior classificaçao
};

const testaQualHotel = (input) => {
  //funçao que sera executada no teste de falhas
  verifica(input);
  const index = calcula();
  return hoteis[index];
};
module.exports = {
  testaQualHotel,
};

const ler = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

ler.question("", (entrada) => {//le a entrada no cmd
  verifica(entrada);
  const index = calcula();
  console.log(hoteis[index]);

  ler.close();
});
