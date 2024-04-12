let valores = [8, 1, 7, 4, 2, 9]


/*
    for (let i = 0;  i < valores.length; i++) {
        console.log(`A posição ${i} tem o valor ${valores[i]}`)
    }
*/


for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

// buscando um valor dentro do array
let pos = valores.indexOf(9) 
console.log(`O valor 8 está na posição ${pos}`)

