// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais
const PlanoDoUsuario = "super premium"
switch (PlanoDoUsuario){
    case "free": console.log("pessoa usuária free tem acesso limitado ao app"); break
    case "premium": console.log("pessoa usuária premium tem acesso a todas as funções"); break
    case "super premium": console.log("pessoa usuária super premium tem acesso total e bônus especiais"); break
    default: console.log("tipo do user não informado")
}