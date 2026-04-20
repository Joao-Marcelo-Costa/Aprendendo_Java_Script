const readline = require("readline")//importa a bibilhoteca do readline

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

leitor.question("Qual é o seu nome ?",(nome) => {console.log("o seu nome é", nome)
    leitor.close
})