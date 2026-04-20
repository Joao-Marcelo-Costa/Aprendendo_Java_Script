// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 
const NomeDoEstudante = "Ana"
const NotaDoEstudante = 1
const QuantidadeDeFaltas = 2

if (NotaDoEstudante >= 8 && QuantidadeDeFaltas <= 2){
    console.log("a/o estudante", NomeDoEstudante,"recebeu bonus")
}else {console.log("a/o estudante", NomeDoEstudante,"não recebeu bonus")}