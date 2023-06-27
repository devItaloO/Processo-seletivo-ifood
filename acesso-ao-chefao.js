// para entrar no chefão final precisamos de 3 itens 
// ItemNecessario1, ItemNecessario2 e ItemNecessario3 da lista (array) itensColetados
let itensColetados = ["machado", "espada", "capa", "adaga", "cetro", "arco", "escudo", "chave"]

let itemNecessario1 = "chave";
let itemNecessario2 = "pedra";
let itemNecessario3 = "flauta";
let itensParaChefao = 0

for (let itens of itensColetados) {
    if (itens === itemNecessario1 || itens === itemNecessario2 || itens === itemNecessario3) {
        itensParaChefao = itensParaChefao + 1;

    } else if (itens !== itemNecessario1 || itens !== itemNecessario2 || itens !== itemNecessario3) {
        itensParaChefao = itensParaChefao - 0;
    }
}

console.log(itensParaChefao)

if (itensParaChefao > 3 || itensParaChefao < 3) {
    console.log("NAO PODE ENFRENTAR")
} else if (itensParaChefao === 3) {
    console.log("PODE ENFRENTAR")
}