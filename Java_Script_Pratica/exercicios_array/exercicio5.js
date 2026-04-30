// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:

// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.
// Exemplo de entrada:

// const precos = [100, 80, 50, 120];
// Saída esperada:

// Preços com desconto: [90, 72, 45, 108]
const precos = [100, 80, 50, 120];
let precosComDesconto = precos.map((preco)=>{return preco * 0.9}) 
console.log(`Preços com desconto: ${precosComDesconto}`)