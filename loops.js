//Exercício 5 letra A
const numero = 7;

for (let i = 1; i <= 10 ; i++){

    const resultado = numero * i;
    
    console.log(`${numero} x ${i} = ${resultado}`);
}

// Exercício 5 letra B

const numeros =[ 1,2,3,4,5,6,7,8,9,10];
let soma = 0;
{
    for (let i = 1 ; i<=numeros.length; i++ ) {
        soma += i;
         console.log("A soma dos números é: ", soma);
    }
   
}

// Exercício 5 letra C

let menor = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if (i < menor){
        menor = i;
    }
}
console.log("O menor número é: ", menor);