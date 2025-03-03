let agregarBtn, mostrarBtn, crearBtn;
let isListVisible = false;

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            agregarAlimento();
        });
    }

    // Event listener para eliminar (DELEGACIÓN DE EVENTOS)
    document.getElementById('listaCompras').addEventListener('click', function (e) {
        if (e.target.classList.contains('eliminar')) {
            const categoria = e.target.dataset.categoria;
            const alimento = e.target.dataset.alimento;
            eliminarAlimento(categoria, alimento);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Selección de botones al cargar la página
    agregarBtn = document.querySelector('button[type="submit"]');
    mostrarBtn = document.querySelector('button[onclick="mostrarLista()"]');
    crearBtn = document.querySelector('button[onclick="crearNuevaLista()"]');
    
    // Estado inicial de los botones
    updateButtonsState();
});


// Actualiza el estado de los botones según las reglas
function updateButtonsState() {
    const isEmpty = isListEmpty();
    mostrarBtn.disabled = isEmpty;
    crearBtn.disabled = !isListVisible;
    agregarBtn.disabled = isListVisible;
}


// Verifica si la lista está vacía
function isListEmpty() {
    for (let categoria in listaDeCompras) {
        if (categoria === 'Selecciona') continue;
        if (listaDeCompras[categoria].length > 0) return false;
    }
    return true;
}






 // Event listener para eliminar
 document.getElementById('listaCompras').addEventListener('click', function (e) {
    if (e.target.classList.contains('eliminar')) {
        const categoria = e.target.dataset.categoria;
        const alimento = e.target.dataset.alimento;
        eliminarAlimento(categoria, alimento);
    }
});

//Día 1 - Operaciones Booleanas
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

    document.getElementById("resultado").innerText = resultado;
}

//Día 2 - Variables y Captura de Datos
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

// Función para capitalizar cada palabra correctamente
function formatearTexto(input) {
    input.value = input.value
        .toLowerCase()
        .split(" ") // Dividir por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar cada palabra
        .join(" "); // Volver a unir
}

//Día 3 - Operaciones Booleanas
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

//Día 4 - Juego Número Secreto
function iniciarJuegoNumero() {
    const numeroSecreto = Math.floor(Math.random() * 11);
    let intentos = 3;
    let acierto = false;

    while (intentos > 0) {
        let intentoUsuario = parseInt(prompt(`Ingresa un número entre 0 y 10 (Intentos restantes: ${intentos})`));

        if (isNaN(intentoUsuario) || intentoUsuario < 0 || intentoUsuario > 10) {
            alert("Por favor, ingresa un número válido entre 0 y 10.");
            continue;
        }

        if (intentoUsuario === numeroSecreto) {
            document.getElementById("mensaje-resultado").textContent = `🎉 ¡Felicidades! Acertaste el número ${numeroSecreto}.`;
            acierto = true;
            break;
        } else {
            alert("❌ No es el número correcto.");
            intentos--;
        }
    }

    if (!acierto) {
        document.getElementById("mensaje-resultado").textContent = `😢 Lo siento, te quedaste sin intentos. El número era ${numeroSecreto}.`;
    }
}

// Dia 5 - Lista de Compras

let listaDeCompras = {
    Frutas: [],
    Verduras: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Carnes: [],
    Otros: []
}

function crearNuevaLista() {

    listaDeCompras = {
        Frutas: [],
        Verduras: [],
        Lácteos: [],
        Congelados: [],
        Dulces: [],
        Carnes: [],
        Otros: []
    }
    document.getElementById("listaCompras").innerHTML = "";
    document.getElementById("alimento").value = "";
    document.getElementById("categoria").value = "Selecciona";

    isListVisible = false;
    updateButtonsState();
};

function agregarAlimento() {
    let alimento = document.getElementById("alimento").value.trim();
    let categoria = document.getElementById("categoria").value;

    if (alimento === "") {
        alert("Por favor, ingresa un alimento.");
        return;
    }

    if (categoria === "Selecciona") {
        alert("Por favor, selecciona una categoría.");
        return;
    }

    // Verificar si el alimento ya existe en la categoría
    if (listaDeCompras[categoria].includes(alimento)) {
        alert("Este alimento ya está en la lista.");
        return;
    }

    listaDeCompras[categoria].push(alimento);
    document.getElementById("alimento").value = "";
    document.getElementById("categoria").value = "Selecciona";
    alert("Alimento agregado correctamente!");

    updateButtonsState();
}

function mostrarLista() {
    let listaHtml = "<h3>Lista de Compras:</h3>";

    // Recorrer solo las categorías que tienen items
    for (let categoria in listaDeCompras) {
        // Saltar la categoría "Selecciona"
        if (categoria === "Selecciona") {
            continue;
        }

        listaHtml += `<div class="categoria-titulo">${categoria}:</div>`;
        listaHtml += `<div class="categoria-items">`;

        if (listaDeCompras[categoria].length === 0) {
            listaHtml += `<div class="vacio">Nada por aquí</div>`;
        } else {
            listaDeCompras[categoria].forEach(alimento => {
                listaHtml += `
                <div class="item">
                 <span>${alimento}</span>
                 <button class="eliminar" 
                data-categoria="${categoria}" 
                data-alimento="${alimento}">X</button>
                </div>`;
            });
        }
        listaHtml += `</div>`; // Cierre de categoria-items
    }

    document.getElementById("listaCompras").innerHTML = listaHtml;

    isListVisible = true;
    updateButtonsState();
}

function eliminarAlimento(categoria, alimento) {
    const index = listaDeCompras[categoria].indexOf(alimento);
    if (index > -1) {
        listaDeCompras[categoria].splice(index, 1);
        mostrarLista(); // Actualizar la vista
        updateButtonsState();
    }
}