function calculate(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso / (altura * altura)
    let texto = ""


    if(imc < 18.5){
      texto = (imc + "Você está Abaxo do Peso")
    }
    else if(imc < 24.9){
      texto = (imc + "Você está no Peso Ideal")
    }
    else if(imc < 25.9){
      texto = (imc + "Você está Sobrepeso")
    }
    else if(imc < 29.9){
        texto = (imc + "Você está pré-obeso")
    }
    else if(imc < 34.9){
        texto = (imc + "Você está com Obesidade 1")
    }
    else if(imc < 39.9){
      texto = (imc + "Você está com Obesidade 2")
    }
    else if(imc > 39.9){
      texto = (imc + "Você está com Obesidade 3")
    }
    document.getElementById("text_area").innerText = texto
}