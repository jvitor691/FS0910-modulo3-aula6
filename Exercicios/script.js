 function BemVindo(){
     document.getElementById("tela").innerHTML = "<h2>Seja Bem-Vindo, Thiago!!!</h2><br><p>Você agora pertence a melhor turma da Digital College!!</p>"
}

 function CalcularIdade(ano){
    let idade = 2023 - ano;

     document.getElementById("tela").innerHTML = "Thiago tem " + idade + " anos.";
 }


 function CalcularPercentual(total,qntDeAluno){
     let AlunoPresentes = total - qntDeAluno;

     let percentual = ((AlunoPresentes * 100) / total).toFixed(1);
    
     if(total == 19){
     document.getElementById("tela").innerHTML = "O percentual de alunos não presentes é " + percentual + "%. Esse valor é referente a alunos ativos, que seriam "
      + total + " de alunos."
     }

    return document.getElementById("tela").innerHTML =
        "O percentual de alunos não presentes é " + percentual + "%. Esse valor é referente a " + total +
          " de alunos.";
    
}

// function Media(teorica,pratica){
//     let total = 10;

//     let calcularMedia = ((2 * teorica) + pratica) / total;

//     return console.log("A média do alino é " + calcularMedia + " .")
// //    return alert("A média do alino é " + calcularMedia + " .")

// }

// Media(7,8)


}
