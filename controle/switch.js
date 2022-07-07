const imprimiResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')    
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')    
   } 
   
}

imprimiResultado(10)
imprimiResultado(8.9)
imprimiResultado(6.55)
imprimiResultado(2.33)
imprimiResultado(-1)
imprimiResultado(11)

// Cuidado com o case, pois sem o break ele executará sempre os códigos abaixo;
// Default não precisa estar no final do código, porém se antes tem que ter o break;
// Não há necessidade de colocar chaves para o case