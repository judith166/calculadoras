
let input = document.getElementById("inputDiv");



//creación de divs
function crearDivs() {
    
    for (let i = 0; i < input.value; i++) {
        
        
        let div = document.createElement("div");
        div.setAttribute("id", `calc${i}`);
        let divContainer = document.getElementById("divContainer");
        divContainer.appendChild(div);
        let calc = `
        
        <label for="input1${i}">Introduzca el primer número:</label><br>
        <input id="num1_${i}" type="number"><br>
        <label for="input2${i}">Introduzca el segundo número:</label><br>
        <input id="num2_${i}" type="number"><br>
        <label for="operacion">Introduzca el tipo de operacion</label><br>
        <input type="text" id="operacion" placeholder="|+|-|/|*|"><br><br>
        <button type="button" onclick="calculadora(${i})">Calcular</button>
        <div class="resultado"><div>
        <hr>
        
`
        div.innerHTML = calc;


    }

}

function calculadora(x) {
    let inputs = document.querySelectorAll("input[type='number']");
    console.log(inputs);

    let input1 =document.getElementById(`num1_${x}`)
    let input2 =document.getElementById(`num2_${x}`);
    
    console.log(input1);
    console.log(input2);


    let operacion = document.getElementById("operacion");
    operacion.setAttribute("id", x);
    let valor = operacion.value;
    // console.log(input1);
    // console.log(input2);
    // console.log(operacion);
    let resultado = 0;

    switch (valor) {
        case "+":
            resultado = parseInt(input1.value) + parseInt(input2.value);
        break;
        case "-":
            resultado = Number(input1.value - input2.value);
        break;
        case "/":
            resultado = Number(input1.value / input2.value);
        break;
        case "*":
            resultado = Number(input1.value * input2.value);
        break;
    }
    let divresultado = document.getElementsByClassName("resultado");
    
    // divresultado.setAttribute("value", x);
    console.log(divresultado[x]);
    divresultado[x].innerHTML = `El resultado es ${resultado}`;
    

    
    

}
    


