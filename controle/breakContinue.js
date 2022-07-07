const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Executando com break...')

for(x in nums) {
    if(x == 5) {
        break // lembrando que break não age no if
    } console.log(`${x} = ${nums[x]}`)
}

console.log('Agora com Continue...')

for(y in nums){
    if(y == 5){
        continue // lembrando que continue não age no if
    } console.log(`${y} = ${nums[y]}`)
}

console.log('Com laço externo...')

ext:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3)
            break ext
        console.log(`Par = ${a}, ${b}`)
        }
}

console.log('Com laço em continue...')

ext2:
for(c in nums) {
    for(d in nums){
        if(c == 2 && d == 1)
        continue ext2
        console.log(`Par = ${c}, ${d}`)
        
    } for(e in nums){
        for(f in nums){
            if(e == 5 && f == 5)
            break ext2
            console.log(`Par Break = ${e},${f}`)
        }
    } 
    
}

// Nunca fazer esse tipo de laço em for