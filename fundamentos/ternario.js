const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.9))
console.log(resultado(10))

const resultado2 = nota2 => {
    return nota2 >= 700 ? "Aprovado Enem" : "Reprovado Enem"
}

console.log(resultado2(740))
console.log(resultado2(690))