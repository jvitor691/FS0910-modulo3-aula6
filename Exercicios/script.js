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

 function Media(teorica,pratica){
     let calcularMedia = (((2 * teorica) + pratica) / 3).toFixed(1);

     return document.getElementById("tela").innerHTML =
     "<h3>A média do aluno é " + calcularMedia + " .</h3>"
}

 let manha = 0;
 let tarde = 0;
 let noite = 0; 
 function estacionamento(horario){
     let hora = horario.slice(0,2);
     if(hora > 4 && hora <= 11){
         manha += 1;
         return;
     }
     if(hora > 11 && hora <= 17){
        tarde += 1;
        return;
    }
     if((hora > 17 && hora <= 23) || (hora >= 00 && hora <= 4)){
        noite += 1;
         return;
     }
}

estacionamento("00:30");
estacionamento("19:30");
estacionamento("18:30");
estacionamento("14:30");
estacionamento("08:30");
estacionamento("20:30");
estacionamento("22:30");
estacionamento("07:30");
estacionamento("03:30");
estacionamento("04:30");

document.write("Acessos da manha: " + manha + "<br>");
document.write("Acessos da tarde: " + tarde + "<br>");
document.write("Acessos da noite: " + noite + "<br>");

