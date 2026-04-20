// 10. Lista de tarefas
// Crie dois arrays:

// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

let lista1 = [
  "limpar a casa",
  "fazer faxina",
  "estudar português",
  "estudar progração",
];
let lista2 = [true, false, true, true];
let filtro = lista1.filter((conclusao, index) => {
  return !lista2[index];
});
console.log(filtro);
