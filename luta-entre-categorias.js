const peso1 = 134
const peso2 = 14
let categoria1 = ''
let categoria2 = ''


// colocar todas as categorias para cada peso

if (peso1 < 55) {
    categoria1 = "pesoleve";
}
if (peso1 >= 55 && peso1 < 65) {
    categoria1 = "pesomeiomedio";
}
if (peso1 >= 65 && peso1 < 75) {
    categoria1 = "pesomedio";
}
if (peso1 >= 75 && peso1 < 85) {
    categoria1 = "pesomeiopesado";
}
if (peso1 > 85) {
    categoria1 = "pesopesado";
}

if (peso2 < 55) {
    categoria2 = "pesoleve";
}
if (peso2 >= 55 && peso2 < 65) {
    categoria2 = "pesomeiomedio";
}
if (peso2 >= 65 && peso2 < 75) {
    categoria2 = "pesomedio";
}
if (peso2 >= 75 && peso2 < 85) {
    categoria2 = "pesomeiopesado";
}
if (peso2 > 85) {
    categoria2 = "pesopesado";
}


if (categoria1 === categoria2) {
    console.log("PODEM LUTAR")
} else if (categoria1 !== categoria2) {
    console.log("NAO PODEM LUTAR")
}
