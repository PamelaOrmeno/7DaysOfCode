document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("formulario");
    if (formulario) {  // Verifica que el formulario exista antes de agregar el listener
        formulario.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar que la página se recargue
            procesarFormulario();
        });
    }
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

function iniciarJuego() {
    let area;
    let camino;
    let framework;

    do {
        area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End? (Escribe 'Front-End' o 'Back-End')").toLowerCase();
        if (area === "front-end") {
            do {
                framework = prompt("¿Quieres aprender React o Vue? (Escribe 'React' o 'Vue')").toLowerCase();
                if (framework === "react" || framework === "vue") {
                    alert(`¡Genial! ${framework.charAt(0).toUpperCase() + framework.slice(1)} es una excelente opción para el desarrollo Front-End.`);
                } else {
                    alert("No ingresaste una opción válida.");
                }
            } while (framework !== "react" && framework !== "vue");
        }
    } while (area !== "front-end" && area !== "back-end");

    do {
        camino = prompt("¿Quieres seguir especializándote en esta área o convertirte en Fullstack? (Escribe 'especializarme' o 'fullstack')").toLowerCase();
        if (camino === "especializarme") {
            alert("¡Buena elección! Especializarse te hará un experto en tu área.");
        } else if (camino === "fullstack") {
            alert("¡Fantástico! Convertirse en Fullstack te abrirá muchas oportunidades.");
        } else {
            alert("No ingresaste una opción válida.");
        }
    } while (camino !== "especializarme" && camino !== "fullstack");

    let continuar = true;
    while (continuar) {
        let tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe el nombre de la tecnología o 'No' para salir)").toLowerCase();

        if (tecnologia === "no") {
            continuar = false;
        } else {
            alert(`¡Interesante! ${tecnologia.charAt(0).toUpperCase() + tecnologia.slice(1)} es una gran tecnología para explorar.`);
        }
    }

    alert("¡Gracias por jugar! Sigue aprendiendo y desarrollando tus habilidades en programación.");
}