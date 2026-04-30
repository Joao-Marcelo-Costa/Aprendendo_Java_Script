// Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.

// Você precisa:

// Mostrar todos os produtos (nome, preço, quantidade).
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// Calcular os totais de venda de cada produto.
// Descobrir o mais lucrativo.
// Exemplo de entrada:

// const produtos = [
//   { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
//   { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
//   { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
//   { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
// ];
// Saída esperada:

// Relatório de produtos vendidos:

// Produto: Notebook | Preço: 2500 | Quantidade vendida: 75
// Produto: Mouse | Preço: 100 | Quantidade vendida: 180
// Produto: Teclado | Preço: 150 | Quantidade vendida: 125
// Produto: Monitor | Preço: 900 | Quantidade vendida: 95

// Produtos com alto volume de vendas (> 100 unidades):
// Mouse
// Teclado

// Total de vendas por produto:
// Notebook: R$ 187500
// Mouse: R$ 18000
// Teclado: R$ 18750
// Monitor: R$ 85500

// Produto mais lucrativo: Notebook com R$ 187500 em vendas.

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }]
console.log("Relatorio de produtos vendidos: ")
console.log(" ")
for (produto of produtos){
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida} `)
}
console.log("")
console.log("Produtos com alto volume de vendas")
for (produto of produtos){
    if (produto.quantidadeVendida > 100){console.log(produto.nome)}
}

console.log("")
console.log("Total de vendas por produto:")
let maiorValor = 0
let maisVendido = ""
for (produto of produtos){
    let vendaTotal = produto.preco * produto.quantidadeVendida
    console.log(`${produto.nome}:  R$${vendaTotal}`)
    if (vendaTotal > maiorValor){
        maiorValor = vendaTotal
        maisVendido = produto.nome
    }
    
}
console.log(`Produto mais lucrativo é ${maisVendido} com R$${maiorValor} reais em vendas`)