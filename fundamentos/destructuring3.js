function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return  Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))  // Podemos declarar o objeto para obter um numero randomico
console.log(rand({ min: 955})) // Podemos declarar o operador "min"
console.log(rand({})) // Sem declarar objeto ou operado será aleatorio para os numeros declados no operador