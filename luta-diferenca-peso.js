// a entrada sera uma variavel do tipo array de number
// que armazena o peso dos lutadores
// lembrando que um array é uma lista
// quando voce vai criar uma lista por array, voce usa [] e divide por virgula
// os dados
// pesos = [53, 56]

// Se a diferença de pesos entre os jogadores for maior que 5kg, eles não podem lutar
let pesos = [51, 56]

let pesoLutador1 = pesos[0]
let pesoLutador2 = pesos[1]
let diferencaDePesos = pesoLutador1 - pesoLutador2

if (diferencaDePesos > 5) {
    console.log("NAO PODEM LUTAR");

} else if (diferencaDePesos <= 5 && diferencaDePesos >= 0) {
    console.log("PODEM LUTAR");
} else if (diferencaDePesos <= 0 && diferencaDePesos >= -5) {
    console.log("PODEM LUTAR");
} else if (diferencaDePesos < (-5)) {
    console.log("NAO PODEM LUTAR");
}
