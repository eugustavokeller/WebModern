const imprimiResultado = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimiResultado(10)
imprimiResultado(6)
imprimiResultado('Epa!')  // Epa como string na comparação de verdadeiro ou falso em relação ao numero 7 será falso!! Cuidado com comparações!!