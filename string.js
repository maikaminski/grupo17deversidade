//manipulação de string 
//criação das variaveis e concatenação
const primeiroNome= "Maria"
const segundoNome= "silva"

const nomecompleto= primeiroNome + " "+ segundoNome
console.log(`o nome completo é ${nomecompleto}`)


//extrair o primeiro nome
const separa = nomecompleto.slice(0, nomecompleto.indexOf(" "));
console.log("Primeiro nome extraído (slice):", separa);

//verificar se o nome completo contem a letra a 
if(nomecompleto.includes("a")){
    console.log(`o nome ${nomecompleto} contem a letra a`)
}else{
    console.log(`o nome ${nomecompleto} não contem a letra a`)
}

//substituir o sobrenome

novo= nomecompleto.replace("silva","Morais")

console.log("olá ",novo)


