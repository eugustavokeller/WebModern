function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Podemos declarar os valores do array max e min
console.log(rand([992])) // Podemos declarar apenas um valor, que no caso assumirá o max
console.log(rand([, 10])) // Podemos deixar em branco o primeiro ou o segundo e assumirá o valor padrão do max ou min, nesse caso max
console.log(rand([])) // Podemos deixar o array em branco e ele assumirá os valores padrões de min e max, 0 e 1000