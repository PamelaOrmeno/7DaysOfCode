// Variables globales para la lista de compras
let agregarBtn, mostrarBtn, crearBtn;
let isListVisible = false;
let listaDeCompras = {
    Frutas: [],
    Verduras: [],
    Lácteos: [],
    Congelados: [],
    Dulces: [],
    Carnes: [],
    Otros: []
};

// Función para inicializar los botones y event listeners de la lista
// Variables globales para control de eventos
let eliminarHandler;
let isProcessingDelete = false;

function inicializarListaCompras() {
    // Solo inicializar si estamos en la página de la lista de compras
    if (!document.getElementById('listaCompras')) {
        return; // No estamos en la página de la lista de compras
    }

    agregarBtn = document.getElementById('btnAgregar');
    mostrarBtn = document.getElementById('btnMostrar');
    crearBtn = document.getElementById('btnCrear');
    const listaContainer = document.getElementById('listaCompras');

    if (agregarBtn && mostrarBtn && crearBtn && listaContainer) {
        console.log('Elementos encontrados y configurados');
        
        // Remover event listeners anteriores
        agregarBtn.removeEventListener('click', agregarAlimento);
        mostrarBtn.removeEventListener('click', mostrarLista);
        crearBtn.removeEventListener('click', crearNuevaLista);
        
        if (eliminarHandler) {
            listaContainer.removeEventListener('click', eliminarHandler);
        }
        
        // Agregar nuevos event listeners
        agregarBtn.addEventListener('click', agregarAlimento);
        mostrarBtn.addEventListener('click', mostrarLista);
        crearBtn.addEventListener('click', crearNuevaLista);
        
        // Crear nuevo handler para eliminar
        eliminarHandler = function(e) {
            const target = e.target;
            
            // Verificar si es un botón de eliminar y que no haya un proceso de eliminación en curso
            if (target.classList.contains('eliminar') && !isProcessingDelete) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                console.log('Click en botón eliminar (delegation):', target.dataset);
                const { categoria, alimento } = target.dataset;
                
                // Desactivar el botón temporalmente
                target.disabled = true;
                eliminarAlimento(categoria, alimento);
                target.disabled = false;
            }
        };
        
        // Remover el handler anterior si existe
        if (listaContainer._eliminarHandler) {
            listaContainer.removeEventListener('click', listaContainer._eliminarHandler);
        }
        
        // Guardar referencia al handler actual
        listaContainer._eliminarHandler = eliminarHandler;
        
        // Agregar el nuevo handler
        listaContainer.addEventListener('click', eliminarHandler, { once: false });
        
        updateButtonsState();
    } else {
        console.error('Error: No se pudieron encontrar los elementos necesarios en la página');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar la lista de compras
    inicializarListaCompras();
    // Día 1 - Operaciones Booleanas
    if (document.getElementById("btnCompararValores")) {
        document.getElementById("btnCompararValores").addEventListener("click", compararValores);
    }

    // Día 2 - Variables y Captura de Datos
    if (document.getElementById("formulario")) {
        document.getElementById("formulario").addEventListener("submit", function (event) {
            event.preventDefault();
            procesarFormulario();
        });
    }

    // Día 3 - Estructuras de Control de Flujo
    const btnIniciar = document.getElementById('btnIniciar');
    if (btnIniciar) {
        btnIniciar.addEventListener('click', iniciarJuego);
    }

    // Día 4 - Juego Número Secreto
    const btnJugar = document.getElementById('btnJugar');
    if (btnJugar) {
        btnJugar.addEventListener('click', function() {
            // Limpiar mensajes antes de iniciar el juego
            document.getElementById("mensaje-resultado").textContent = '';
            document.getElementById("pista").textContent = '';
            setTimeout(iniciarJuegoNumero, 100); // Pequeño retraso para asegurar que la UI se actualice
        });
    }

    // Día 5 y 6 - Lista de Compras
    agregarBtn = document.getElementById('btnAgregar');
    mostrarBtn = document.getElementById('btnMostrar');
    crearBtn = document.getElementById('btnCrear');

    const listaCompras = document.getElementById("listaCompras");
    if (listaCompras) {
        listaCompras.addEventListener("click", function (e) {
            if (e.target.classList.contains("eliminar")) {
                eliminarAlimento(e.target.dataset.categoria, e.target.dataset.alimento);
            }
        });
    }

    // Actualizar estado inicial de los botones
    updateButtonsState();

    // Día 7 - Calculadora Interactiva
    if (document.querySelector('button[onclick="calcular()"]')) {
        document.querySelector('button[onclick="calcular()"]').addEventListener("click", calcular);
    }
});

// Actualiza el estado de los botones según las reglas
function updateButtonsState() {

    const isEmpty = isListEmpty();
    if (mostrarBtn) {
        mostrarBtn.disabled = isEmpty;
        mostrarBtn.classList.toggle('disabled', isEmpty);
    }
    if (crearBtn) {
        crearBtn.disabled = !isListVisible;
        crearBtn.classList.toggle('disabled', !isListVisible);
    }
    if (agregarBtn) {
        agregarBtn.disabled = isListVisible;
        agregarBtn.classList.toggle('disabled', isListVisible);
    }
}

// Verifica si la lista está vacía
function isListEmpty() {
    for (let categoria in listaDeCompras) {
        if (categoria === 'Selecciona') continue;
        if (listaDeCompras[categoria].length > 0) return false;
    }
    return true;
}

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
    let nombreElement = document.getElementById("nombre");
    let edadElement = document.getElementById("edad");
    let lenguajeElement = document.getElementById("lenguaje");

    if (nombreElement && edadElement && lenguajeElement) {
        let nombre = nombreElement.value;
        let edad = edadElement.value;
        let lenguaje = lenguajeElement.value;

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

            // Limpiar el formulario después de mostrar los mensajes
            nombreElement.value = '';
            edadElement.value = '';
            lenguajeElement.value = '';
        }, 500);
    } else {
        console.error("Uno o más elementos del formulario no se encontraron.");
    }
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
    // Obtener elementos del DOM
    const mensajeResultado = document.getElementById("mensaje-resultado");
    const pistaContainer = document.getElementById("pista");

    // Inicializar variables del juego
    const numeroSecreto = Math.floor(Math.random() * 11);
    let intentos = 3;

    // Función para manejar cada intento
    function manejarIntento() {
        const intentoUsuario = parseInt(prompt(`Ingresa un número entre 0 y 10 (Intentos restantes: ${intentos})`));

        // Validar entrada
        if (isNaN(intentoUsuario) || intentoUsuario < 0 || intentoUsuario > 10) {
            alert("Por favor, ingresa un número válido entre 0 y 10.");
            return manejarIntento();
        }

        // Comprobar el número
        if (intentoUsuario === numeroSecreto) {
            mensajeResultado.textContent = `🎉 ¡Felicidades! Acertaste el número ${numeroSecreto}.`;
            return true; // Acierto
        }

        // Dar pista
        const pista = intentoUsuario < numeroSecreto ? 
            "El número secreto es MAYOR que tu número" : 
            "El número secreto es MENOR que tu número";
        alert(`💡 ${pista}`);

        // Actualizar intentos y mensaje
        intentos--;
        if (intentos > 0) {
            mensajeResultado.textContent = `❌ No es el número correcto. Te quedan ${intentos} intentos.`;
            return false;
        } else {
            mensajeResultado.textContent = `😢 Lo siento, te quedaste sin intentos. El número era ${numeroSecreto}.`;
            return true; // Fin del juego
        }
    }

    // Bucle principal del juego
    let juegoTerminado = false;
    while (!juegoTerminado) {
        juegoTerminado = manejarIntento();
    }
}

// Dia 5 - Lista de Compras

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
    let alimentoElement = document.getElementById("alimento");
    let categoriaElement = document.getElementById("categoria");

    if (alimentoElement && categoriaElement) {
        let alimento = alimentoElement.value.trim();
        let categoria = categoriaElement.value;

        console.log('Intentando agregar:', { alimento, categoria });
        console.log('Estado actual de listaDeCompras:', listaDeCompras);

        // Primero validamos que la categoría sea válida
        if (categoria === "Selecciona") {
            alert("Por favor, selecciona una categoría.");
            return;
        }

        // Luego validamos que la categoría exista en listaDeCompras
        if (!listaDeCompras.hasOwnProperty(categoria)) {
            alert("Categoría no válida.");
            return;
        }

        // Validar que el alimento no esté vacío
        if (!alimento) {
            alert("Por favor, ingresa un alimento.");
            return;
        }

        // Finalmente verificamos si el alimento ya existe
        if (listaDeCompras[categoria].includes(alimento)) {
            alert("Este alimento ya está en la lista.");
            return;
        }

        // Si la lista está visible, ocultarla antes de agregar
        // Agregar el alimento a la lista
        if (!Array.isArray(listaDeCompras[categoria])) {
            listaDeCompras[categoria] = [];
        }
        listaDeCompras[categoria].push(alimento);
        console.log(`Alimento ${alimento} agregado a ${categoria}`);
        console.log('Lista actualizada:', listaDeCompras);

        // Limpiar el formulario
        alimentoElement.value = "";
        categoriaElement.value = "Selecciona";
        
        // Si la lista está visible, actualizarla
        if (isListVisible) {
            mostrarLista();
        }

        alert("Alimento agregado correctamente!");
        updateButtonsState();
    } else {
        console.error("Uno o más elementos del formulario no se encontraron.");
    }
}

function mostrarLista() {
    console.log('Iniciando mostrarLista');
    
    // Obtener el contenedor de la lista
    const listaContainer = document.getElementById('listaCompras');
    if (!listaContainer) {
        console.error('No se encontró el contenedor de la lista');
        return;
    }

    // Verificar si hay elementos en la lista
    let hayElementos = false;
    let listaHtml = '';

    // Recorrer las categorías
    for (let categoria in listaDeCompras) {
        if (categoria === 'Selecciona') continue;

        const items = listaDeCompras[categoria];
        console.log(`Categoría ${categoria}:`, items);

        if (items && items.length > 0) {
            hayElementos = true;
            listaHtml += `
                <div class="categoria">
                    <div class="categoria-titulo">${categoria}</div>
                    <div class="categoria-items">`;

            items.forEach(alimento => {
                listaHtml += `
                    <div class="item">
                        <span>${alimento}</span>
                        <button class="eliminar" 
                            data-categoria="${categoria}" 
                            data-alimento="${alimento}">X</button>
                    </div>`;
            });

            listaHtml += '</div></div>';
        }
    }

    // Construir el HTML final
    const htmlFinal = `
        <div class="lista-header">
            <h3>📜 🛒 Lista de Compras</h3>
        </div>
        <div class="lista-contenido">
            ${!hayElementos ? 
                '<div class="mensaje-vacio">No hay elementos en la lista</div>' : 
                listaHtml
            }
        </div>`;

    // Mostrar la lista
    console.log('Mostrando lista');
    console.log('Estado de la lista:', { hayElementos });
    console.log('HTML Final:', htmlFinal);

    // Actualizar el contenedor
    listaContainer.innerHTML = htmlFinal;


    isListVisible = true;
    updateButtonsState();
    console.log('Lista mostrada correctamente');
}

//día 6 - lista supermercado mensaje de confirmación
function eliminarAlimento(categoria, alimento) {
    // Prevenir múltiples llamadas simultáneas
    if (isProcessingDelete) {
        console.log('Ya hay una eliminación en proceso');
        return;
    }
    
    try {
        isProcessingDelete = true;
        console.log('Iniciando eliminarAlimento:', { categoria, alimento });
        
        // Validar que la categoría existe
        if (!listaDeCompras.hasOwnProperty(categoria)) {
            console.error('Categoría no válida:', categoria);
            return;
        }

        // Validar que el array existe
        if (!Array.isArray(listaDeCompras[categoria])) {
            console.error('La categoría no tiene un array válido:', categoria);
            return;
        }

        // Buscar el alimento en el array (case sensitive)
        const index = listaDeCompras[categoria].indexOf(alimento);
        console.log('Búsqueda de índice para:', { categoria, alimento, index });
        
        if (index === -1) {
            console.error('Alimento no encontrado en la categoría');
            return;
        }

        let confirmacion = confirm(`¿Seguro que quieres eliminar ${alimento} de la categoría ${categoria}?`);
        console.log('Respuesta confirmación:', confirmacion);
        
        if (confirmacion) {
            eliminadoReciente = { categoria, alimento };
            listaDeCompras[categoria].splice(index, 1);
            console.log('Elemento eliminado:', { categoria, alimento });
            console.log('Estado actual de la lista:', listaDeCompras);
            mostrarLista();
            updateButtonsState();
        }
    } finally {
        isProcessingDelete = false;
        console.log('Proceso de eliminación finalizado');
    }
}

function deshacerEliminacion() {
    if (eliminadoReciente) {
        listaDeCompras[eliminadoReciente.categoria].push(eliminadoReciente.alimento);
        eliminadoReciente = null;
        mostrarLista();
        updateButtonsState();
    }
}


//día 7 - Calculadora interactiva

// Historial de operaciones
let historialOperaciones = [];

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function validarNumero(input, errorId) {
    const valor = parseFloat(input.value);
    const errorDiv = document.getElementById(errorId);
    
    if (isNaN(valor)) {
        errorDiv.textContent = "Por favor, ingrese un número válido";
        input.classList.add('error');
        return false;
    }
    
    errorDiv.textContent = "";
    input.classList.remove('error');
    return true;
}

function obtenerSimboloOperacion(operacion) {
    const simbolos = {
        sumar: '+',
        restar: '-',
        multiplicar: '×',
        dividir: '÷'
    };
    return simbolos[operacion] || '';
}

function agregarAlHistorial(num1, num2, operacion, resultado) {
    const simbolo = obtenerSimboloOperacion(operacion);
    const operacionTexto = `${num1} ${simbolo} ${num2} = ${resultado}`;
    
    historialOperaciones.unshift(operacionTexto);
    if (historialOperaciones.length > 5) {
        historialOperaciones.pop();
    }
    
    const historialLista = document.getElementById('historial');
    historialLista.innerHTML = historialOperaciones
        .map(op => `<li>${op}</li>`)
        .join('');
}

function limpiarFormulario() {
    document.getElementById('calculadoraForm').reset();
    document.getElementById('num1Error').textContent = '';
    document.getElementById('num2Error').textContent = '';
    document.getElementById('resultado').textContent = '';
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));
}

function calcular(event) {
    if (event) {
        event.preventDefault();
    }

    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operacion = document.getElementById("operacion").value;
    const resultadoDiv = document.getElementById("resultado");

    // Validar inputs
    const num1Valido = validarNumero(num1Input, 'num1Error');
    const num2Valido = validarNumero(num2Input, 'num2Error');

    if (!num1Valido || !num2Valido) {
        return;
    }

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    try {
        let resultado;
        switch (operacion) {
            case "sumar":
                resultado = sumar(num1, num2);
                break;
            case "restar":
                resultado = restar(num1, num2);
                break;
            case "multiplicar":
                resultado = multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = dividir(num1, num2);
                break;
        }

        // Formatear el resultado para mostrar máximo 4 decimales
        const resultadoFormateado = Number.isInteger(resultado) ? 
            resultado : 
            parseFloat(resultado.toFixed(4));

        resultadoDiv.textContent = `El resultado es: ${resultadoFormateado}`;
        agregarAlHistorial(num1, num2, operacion, resultadoFormateado);

        // Agregar clase para animación
        resultadoDiv.classList.add('resultado-animado');
        setTimeout(() => {
            resultadoDiv.classList.remove('resultado-animado');
        }, 500);

    } catch (error) {
        resultadoDiv.textContent = error.message;
        resultadoDiv.classList.add('error');
    }
}
