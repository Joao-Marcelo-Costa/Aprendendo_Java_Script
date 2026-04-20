// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

let idades = [10, 20, 17, 15, 12, 19, 80, 70]
let filtro = idades.filter((idade) => {return idade => 18})
console.log(filtro)