//calcular o numero de euler e
let precissao = 9001
let e = 0
function fatorial (num){
    let result = 1
    for (let c =1; c<=num;c++ ){
        result = result*c
    }
    return result
}

for (let c = 1; c <= precissao;c++){
    e = 1/fatorial(c) + e
}
console.log(e + 1)