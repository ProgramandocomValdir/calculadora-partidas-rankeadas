// Criei essa função para calcular o rank do jogador
// Ela recebe a quantidade de vitórias e derrotas
function calcularRank(vitorias, derotas) {

// Aqui eu calculo o saldo de vitórias
    // Regra: vitórias - derrotas
    let saldoVitorias = vitorias - derotas;

     // Essa variável vai guardar o nível do jogador
    let nivel = " ";

     // A partir daqui eu verifico em qual nível o jogador se encaixa
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20 ) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50 ) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80 ) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90 ) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100 ) {
        nivel = "Lendario";
    } else{
      // Se tiver 101 vitórias ou mais, cai direto aqui
     nivel = "Imortal";
    }
      // Retorno a mensagem final conforme pedido no desafio
    return `O Herói tem  ${saldoVitorias} vitórias de saldo e está classificado no nível ${nivel}`;
 
}
// Aqui estou simulando os valores de entrada
let vitorias = 75;
let derotas = 20;

// Chamando a função e exibindo o resultado no console
console.log(calcularRank(vitorias, derotas))
