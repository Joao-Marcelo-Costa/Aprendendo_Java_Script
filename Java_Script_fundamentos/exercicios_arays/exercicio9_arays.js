// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.
let carrinho_compras = [10, 20, 30, 70, 40, 10]
let soma = 0
for (c of carrinho_compras){//somar
    soma = c + soma
}
console.log(soma*0.8)