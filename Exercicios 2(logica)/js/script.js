function bia(){
    let numeroRandomico = Math.floor(Math.random() * 100) + 1;
    let chance = 1;
    let palpite = resultado.value;
    for(let i; i<= chance; i++){
        if(palpite != numeroRandomico){
            if(i>chance){
                alert("Suas chances acabaram!!")
            }
            alert("errou!!")
        }
    }
}
