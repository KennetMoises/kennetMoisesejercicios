/*Buscar Impares  */
function buscarImpares() {
    const num1 = parseInt(document.getElementById("txtimpar1").value);
    const num2 = parseInt(document.getElementById("txtimpar2").value);
    let resultadoContainer = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultadoContainer.innerHTML = "<p>Por favor, ingrese números válidos en ambos campos.</p>";
        return;
    }

    let impares = [];

    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }

    if (impares.length === 0) {
        resultadoContainer.innerHTML = "<p>No hay números impares en el rango dado.</p>";
    } else {
        resultadoContainer.innerHTML = "<p>Números impares en el rango:\n " + impares.join("\n ") + "</p>";
    }
}

function Limpiar() {
    let resultadoContainer = document.getElementById("resultado");
    resultadoContainer.textContent = ""; // Borra el contenido
}

/* PALABRA AL REVES */
function revertirPalabra() {
    const palabra = document.getElementById("Palabra").value;
    const resultadoContainer = document.getElementById("resultado");

    if (palabra === "") {
        resultadoContainer.innerHTML = "<p>Por favor, ingrese una palabra.</p>";
        return;
    }

    const palabraInvertida = palabra.split("").reverse().join("");
    resultadoContainer.innerHTML = "<p>Palabra invertida: " + palabraInvertida + "</p>";
}

/*Secuencia de Fibonacci */ 
function generarFibonacci() {
    var num = parseInt(document.getElementById("numInput").value);

    if (isNaN(num) || num < 0) {
        alert("Por favor, ingrese un número válido mayor o igual a 0.");
        return;
    }

    var fib = [0, 1];

    for (var i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById("resultado").textContent = fib.join(", ");
}

/*Vericar si es palindromo*/
function verificarPalindromo() {
    let palabraInput = document.getElementById('palabraInput').value;
    const resultadoDiv = document.getElementById('resultado');

    palabraInput = palabraInput.toLowerCase().replace(/\s/g, '');
    const palabraInvertida = palabraInput.split('').reverse().join('');

    if (palabraInput === palabraInvertida) {
        resultadoDiv.innerHTML = `<p>${palabraInput} es un palíndromo.</p>`;
    } else {
        resultadoDiv.innerHTML = `<p>${palabraInput} no es un palíndromo.</p>`;
    }
}


/* Obtener fechas*/
function obtenerPrimerYUltimoDiaDeMes(mes, año) {
    // Crear una fecha para el primer día del mes
    const primerDia = new Date(año, mes - 1, 1); /* mes-1 porque los meses se enumeran del 0 al 11 y el 1 para obtener el dia 1 del mes deseado */

    // Obtener el último día del mes siguiente
    const ultimoDiaMesSiguiente = new Date(año, mes, 0); /*O dia anterior al primer dia del mes especificado */

    return {
        primerDia: primerDia.getDate(),
        ultimoDia: ultimoDiaMesSiguiente.getDate()
    };
}

function obtenerFechas() {
    const mes = parseInt(document.getElementById('mesInput').value);
    const año = parseInt(document.getElementById('añoInput').value);
    const resultadoP = document.getElementById('resultado');

    if (isNaN(mes) || isNaN(año) || mes < 1 || mes > 12) {
        resultadoP.textContent = 'Ingrese un mes válido (1-12) y un año válido.';
    } else {
        const fechas = obtenerPrimerYUltimoDiaDeMes(mes, año);
        resultadoP.textContent = `Primer día: ${fechas.primerDia}, Último día: ${fechas.ultimoDia}`;
    }
}

/*Calculadora pokemon */
var types = ["electricidad", "agua", "fuego", "hierba"];

function calculardaño() {
    var type1 = document.getElementById('type1').value;
    var type2 = document.getElementById('type2').value;
    var attack = parseInt(document.getElementById('attack').value);
    var defense = parseInt(document.getElementById('defense').value);

    var efficacy = 0.5; // Valor por defecto

    if (types.includes(type1) && types.includes(type2)) {
        if (type1 === "fuego" && type2 === "hierba") 
            efficacy = 2;
         if (type1 === "agua" && type2 === "fuego") 
            efficacy = 2;
         if (type1 === "hierba" && type2 === "agua") 
            efficacy = 2;
         if (type1 === "electricidad" && type2 === "agua") 
            efficacy = 2;
         if (type1 === "fuego" && (type2 === "electricidad" || type2 === "fuego")) 
            efficacy = 1;
         if (type1 === "fuego" && type2 === "hierba" || type2 === "fuego" && type1 === "hierba") 
            efficacy = 1;
        
    }

    var damage = Math.floor(50 * (attack / defense) * efficacy);
    var resultadoP = document.getElementById('resultado');
    resultadoP.textContent = `El daño calculado es: ${damage}`;
}

/*Hacer girar la pokeball*/
const pokeball = document.getElementById('pokeball');

pokeball.addEventListener('click', () => {
    pokeball.classList.toggle('rotate');
});


/*Visor */
let visor1;
let mititulo;

window.onload = function () {
    visor1 = document.getElementById("visor");
    mititulo = document.getElementById("titulo");
}

function mifoto(num) {
    f = "/img/Foto" + num + ".jpg"; // Corrige la ruta de la imagen
    document.images["fotovisor"].src = f;
    t = document.images["fotos" + num].alt;
    mititulo.textContent = t; // Cambia innerHTML a textContent
}







