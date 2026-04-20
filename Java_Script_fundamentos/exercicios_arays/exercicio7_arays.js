// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

let precos = [10, 20, 20 ,22 ,30, 70, 11, 52]
let desconto = precos.map((preco) => {return preco * 0.9})
console.log(desconto)