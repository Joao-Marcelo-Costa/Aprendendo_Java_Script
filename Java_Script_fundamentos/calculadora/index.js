import { createInterface } from "readline";
import {soma, subtração} from "./opreracoesMatematicas.js"
const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});
leitor.question("Digite o primeiro numero ", (num1) => {
  leitor.question("Digite o segundo numero ", (num2) => {
    leitor.question("Digite a operação ", (operação) => {
        const numero1 = Number.num1
        const numero2 = Number.num2
        let resultado = null
        if (operação === "+"){
            console.log(soma(num1,num2))
        }else if (operação === "-"){
            console.log(subtração(num1,num2))
        }else{console.log("operação inválida")}

      leitor.close;

        if (resultado != null){
          console.log("o resultado da operação é", resultado)
        }
    });
  });
});
