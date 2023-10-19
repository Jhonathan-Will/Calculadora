let valor1 = 0
let valor2 = 0
let operador = " ";
let total = 0
let resgardo =" ";

function igual(){

    if(valor2 == 0 ){
        valor2 = parseInt(document.getElementById("h3").innerText);
        document.getElementById("h3").innerHTML = "";
        console.log("valor 2 -- 0");
    }
    
    if(operador == "+"){
        console.log(valor1, valor2, total)
        total = valor1 + valor2 ;
        valor1 = total
        document.getElementById("h3").innerHTML = `${total}`;
        console.log(valor1, valor2, total)
    }

      if(operador == "-"){
        console.log(valor1, valor2, total)
        total = valor1 - valor2 ;
        console.log(total)
        valor1 = total
        document.getElementById("h3").innerHTML = `${total}`;
        console.log(valor1, valor2, total)
    }
    
     if(operador == "*" ){
        console.log(valor1, valor2, total)
        total = valor1 * valor2 ;
        valor1 = total
        document.getElementById("h3").innerHTML = `${total}`;
        console.log(valor1, valor2, total)
    }
   
     if(operador == "/"){
        console.log(valor1, valor2, total)
        total = valor1 / valor2 ;
        valor1 = total
        document.getElementById("h3").innerHTML = `${total}`;
        console.log(valor1, valor2, total)
    }
    

}
function positivo(){
    operador = "+"
    if(valor1 <= 0){
       valor2 = parseInt(0);
        resgardo = operador;
        console.log(operador)
        valor1 = parseInt(document.getElementById("h3").innerText);
        document.getElementById("h3").innerText = " ";  
        console.log("caso 1");
    }
    else if(total != 0 || total <=0){
        valor2 = 0
        console.log(resgardo)
        document.getElementById("h3").innerText = " ";
        console.log("caso 2");
    }
    
    if( operador !== resgardo){
        valor2 = 0;
        operador = "+"
        resgardo = operador;
        document.getElementById("h3").innerText = " ";  
        console.log("caso 3");
    }
}


function multiplicacao(){
    operador = "*"
    if(valor1 <= 0){
       valor2 = parseInt(0);
        resgardo = operador;
        console.log(operador)
        valor1 = parseInt(document.getElementById("h3").innerText);
        document.getElementById("h3").innerText = " ";  
    }
    else if(total >= 0 || total <= 0){
        valor2 = 0
        console.log(resgardo)
        document.getElementById("h3").innerText = " ";
    }

    if( operador !== resgardo){
        valor2 = 0;
        operador = "*"
        resgardo = operador;
        document.getElementById("h3").innerText = " ";  
        console.log("caso 3");
    }

}

function negativo(){
    operador = "-"
    if(valor1 <= 0){
       valor2 = parseInt(0);
        resgardo = operador;
        console.log(operador)
        valor1 = parseInt(document.getElementById("h3").innerText);
        document.getElementById("h3").innerText = " ";  
    }
    else if(total != 0 || total <= 0){ 
        valor2 = 0
        console.log(resgardo)
        document.getElementById("h3").innerText = " ";
    }

    if( operador !== resgardo){
        valor2 = 0;
        operador = "-"
        resgardo = operador;
        document.getElementById("h3").innerText = " ";  
        console.log("caso 3");
    }

    }

function divisao(){
    operador = "/"
    if(valor1 <= 0){
        valor2 = parseInt(0);
        resgardo=operador;
        console.log(operador)
        valor1 = parseInt(document.getElementById("h3").innerText);
        document.getElementById("h3").innerText = " ";  
    }
    else if(total != 0 || total <= 0){
        valor2 = 0
        console.log(resgardo)
        document.getElementById("h3").innerText = " ";
    }

    if( operador !== resgardo){
        valor2 = 0;
        operador = "/"
        resgardo = operador;
        document.getElementById("h3").innerText = " ";  
        console.log("caso 3");
    }

}

function um(){
    let num1= document.getElementById("um").value;
    num1= num1.toString();
    document.getElementById("h3").innerHTML += num1;
}

function dois(){
    let num2= document.getElementById("dois").value;
    num2= num2.toString();
    document.getElementById("h3").innerHTML += num2;
}

function tres(){
    let num3= document.getElementById("tres").value;
    num3= num3.toString();
    document.getElementById("h3").innerHTML += num3;
}

function quatro(){
    let num4= document.getElementById("quatro").value;
    num4= num4.toString();
    document.getElementById("h3").innerHTML += num4;
}

function cinco(){
    let num5= document.getElementById("cinco").value;
    num5= num5.toString();
    document.getElementById("h3").innerHTML += num5;
}

function seis(){
    let num6= document.getElementById("seis").value;
    num6= num6.toString();
    document.getElementById("h3").innerHTML += num6;
}

function sete(){
    let num7= document.getElementById("sete").value;
    num7= num7.toString();
    document.getElementById("h3").innerHTML += num7;
}

function oito(){
    let num8= document.getElementById("oito").value;
    num8= num8.toString();
    document.getElementById("h3").innerHTML += num8;
}

function nove(){
    let num9= document.getElementById("nove").value;
    num9= num9.toString();
    document.getElementById("h3").innerHTML += num9;
}

function zero(){
    let num0= document.getElementById("zero").value;
    num0= num0.toString();
    document.getElementById("h3").innerHTML += num0;
}

function limpar(){
    valor1 = 0;
    valor2 = 0 ;
    total = 0;
    operador = " ";
    document.getElementById("h3").innerHTML = "";
}