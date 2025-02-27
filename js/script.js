document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que la página se recargue
        procesarFormulario();
    });
});

function compararValores() {
    
    let numeroUn = 1;
    let stringUn = '1';
    let numeroTreinta = 30;
    let stringTreinta = '30';
    let numeroDiez = 10;
    let stringDiez = '10';

    let resultado = ">> Reto #7DaysOfCode - Día 1: Operaciones Booleanas en JavaScript\n\n";

    if (numeroUn == stringUn && numeroUn !== stringUn) {
        resultado += "✓ Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes.\n";
    } else {
        resultado += "✗ Las variables numeroUn y stringUn no tienen el mismo valor.\n";
    }

    if (numeroTreinta === stringTreinta) {
        resultado += "✓ Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo.\n";
    } else {
        resultado += "✗ Las variables numeroTreinta y stringTreinta no tienen el mismo tipo.\n";
    }

    if (numeroDiez == stringDiez && numeroDiez !== stringDiez) {
        resultado += "✓ Las varibles numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes.\n";
    } else {
        resultado += "✗ Las variables numeroDiez y stringDiez no tienen el mismo valor.\n";
    }

    console.log(resultado);
    document.getElementById("resultado").innerText = resultado;
}
// Función para capitalizar cada palabra correctamente
function formatearTexto(input) {
    input.value = input.value
        .toLowerCase()
        .split(" ") // Dividir por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar cada palabra
        .join(" "); // Volver a unir
}

function procesarFormulario() {
    // Capturar valores de los inputs
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;
    
    // Crear mensaje personalizado
    let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    
    // Mostrar el mensaje en la página
    document.getElementById("mensaje").textContent = mensaje;
    
    // Preguntar si le gusta el lenguaje de programación
    setTimeout(() => {
        let respuesta;
        do {
            respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
            if (respuesta !== "1" && respuesta !== "2") {
                alert("Por favor, ingresa una respuesta válida (1 o 2).");
            }
        } while (respuesta !== "1" && respuesta !== "2");

        if (respuesta == "1") {
            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        } else {
            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
        }
    }, 500);
}
