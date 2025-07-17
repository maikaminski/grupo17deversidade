
/* a) Crie um sistema de classificação de notas:
- 0-59: F
- 60-69: D
- 70-79: C
- 80-89: B
- 90-100: A*/

let nota= 101;

if(nota<=59){
  console.log("F");
}else if(nota<=69){
  console.log("D");
}else if(nota<=79){
  console.log("C");
}else if(nota<=89){
  console.log("B");
}else if(nota<=100){
  console.log("A")
}else{
  console.log("Insira uma nota válida")
}

// b) Verifique se um número é par ou ímpar

let num= 10;

if(num %2==0){
  console.log(`o número ${num} é par`)
}else{
  console.log(`o número ${num} é impar`)
}

/* c) Crie uma verificação que diga se uma pessoa pode dirigir
(precisa ser maior de idade E ter habilitação)*/

const pessoa={
    "nome":"Rui", 
    "idade":1,
    "habilitacao":true
}

if(pessoa.idade >=18 && pessoa.habilitacao===true){
  console.log("Sr(a) ", pessoa.nome, "estás habilitado para dirigir");
}else{
  console.log("Sr(a) ", pessoa.nome, "Não estás habilitado para dirigir")
}