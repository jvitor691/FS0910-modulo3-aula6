// function boasVindas(nome = ""){
//     if(nome == ""){
//         return "Seja bem vindo";
//     }else{
//         return "Seja bem vindo " + nome;
//     }
// }

/**
 * Retorna as boas vindas, pode ou não cololar parametro
 * @param {*} nome String
 * @returns "Seja bem-vindo"
 */
function boasVindas(nome){
    if(nome){
        return `Seja bem-vindo ${nome}`;
    }else{
        return "Seja bem-vindo";
    }
}

function somar(valor1, valor2){
    let soma = valor1 + valor2;
    return soma;
}

"gleidson".indexOf("g")

let pessoa = {
    nome: "Enzo"
}

console.log(boasVindas(pessoa.nome));