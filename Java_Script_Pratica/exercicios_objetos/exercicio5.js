// Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo é representado por um objeto, e todos estão organizados dentro de um array.

// Escreva um programa que:

// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.
// Exemplo de entrada:

// const dispositivos = [
//    // preencha com as propriedades necessárias
// ];

// Saída esperada:

// Dispositivo: Impressora | Status: ativo  
// Dispositivo: Scanner | Status: inativo  
// Dispositivo: Projetor | Status: ativo
const rede = [
    dispositivo1 = {
        nome:"celular do João Marcelo",
        status:"On-line"
    },
    dispositivo2 = {
        nome:"computador do Marcelo",
        status:"On-line"
    },
    dispositivo3 = {
        nome:"celular da Daniele",
        status:"Of-line"
    }
]
for (dispositivo of rede){
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`)
}