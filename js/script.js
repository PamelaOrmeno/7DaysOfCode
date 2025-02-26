function compararValores() {
    
    let numeroUn = 1;
    let stringUn = '1';
    let numeroTreinta = 30;
    let stringTreinta = '30';
    let numeroDiez = 10;
    let stringDiez = '10';

    let resultado = ">> Reto #7DaysOfCode - Día 1: Operaciones Booleanas en JavaScript\n\n";
    
    if (numeroUn == stringUn && numeroUn !== stringUn) {
        resultado += "✓ numeroUn y stringUn tienen el mismo valor, pero tipos diferentes.\n";
    } else {
        resultado += "✗ numeroUn y stringUn no tienen el mismo valor.\n";
    }

    if (numeroTreinta === stringTreinta) {
        resultado += "✓ numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo.\n";
    } else {
        resultado += "✗ numeroTreinta y stringTreinta no tienen el mismo tipo.\n";
    }

    if (numeroDiez == stringDiez && numeroDiez !== stringDiez) {
        resultado += "✓ numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes.\n";
    } else {
        resultado += "✗ numeroDiez y stringDiez no tienen el mismo valor.\n";
    }

    console.log(resultado);
    document.getElementById("resultado").innerText = resultado;
}
