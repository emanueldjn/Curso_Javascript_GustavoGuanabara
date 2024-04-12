let num = [5, 8, 2, 9, 3];
console.log(` nosso array é o ${num} `)

// quero que coloque na ultima posição
num.push(7)
console.log(`obrigando a colocar no final. Agora nosso array é o ${num} `)

// saber o comprimento
num.length
console.log(`o comprimento do array é: ${num.length} `)

// coloando em ordem crescente
num.sort()
console.log(`colocado em ordem crescente: ${num.sort()}`)


// acrescentando um elemento
num[5] = 10;
console.log(`Agora, nosso array é o ${num} `)



// mostrando cada indice e seu respectivo valor
for (let i = 0;  i < num.length; i++) {
    console.log(`${i}: ${num[i]}`) 
}