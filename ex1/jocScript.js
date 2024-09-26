let NUM_MIN;
let NUM_MAX;
let secretNum;
let numJugades;
let punts = 0;
let intentos = [];

// Reiniciar el juego y generar un número secreto
function buttonReinicia() {
    NUM_MIN = parseInt(prompt("Elige un valor mínimo")); 
    NUM_MAX = parseInt(prompt("Elige un valor máximo")); 

    // Validación de los valores mínimos y máximos
    if (isNaN(NUM_MIN) || isNaN(NUM_MAX) || NUM_MIN >= NUM_MAX) {
        alert('Por favor, elige valores válidos: el mínimo debe ser menor que el máximo.');
        return; 
    }

    numJugades = NUM_MAX - NUM_MIN; 
    secretNum = Math.floor(Math.random() * (NUM_MAX - NUM_MIN + 1)) + NUM_MIN; 
    console.log('Número secreto:', secretNum);

    document.getElementById('jugades').innerHTML = numJugades;
    document.getElementById('main').style.backgroundColor = '';
    document.getElementById('footer').style.backgroundColor = '';
    document.getElementById('jugada').innerHTML = 'Comencem la partida...';
    document.getElementById('interrogant').innerHTML = '?'; 
    document.getElementById("provaBoton").disabled = false; 
    document.getElementById("reiniciarBoton").disabled = true;
    document.getElementById("numMin").innerHTML = NUM_MIN;
    document.getElementById("numMax").innerHTML = NUM_MAX;
}

//Boton prova
function buttonProva() {
    let numInput = parseInt(document.getElementById("numInput").value);
    console.log('Número ingresado:', numInput);

    if (numJugades > 0) {
        if (numInput === secretNum) {
            document.getElementById('main').style.backgroundColor = 'green';
            document.getElementById('footer').style.backgroundColor = 'green';
            document.getElementById('interrogant').innerHTML = secretNum;
            document.getElementById('jugada').innerHTML = '¡Bien! Adivinaste el número';
            document.getElementById("reiniciarBoton").disabled = false;
            document.getElementById("provaBoton").disabled = true;

            if (numJugades > punts) {
                punts = numJugades;
                document.getElementById('punts').innerHTML = numJugades;
            }
        } else if (numInput < NUM_MIN || numInput > NUM_MAX) {
            alert('El número debe estar entre el mínimo y el máximo');
        } else {
            numJugades--;
            document.getElementById('jugades').innerHTML = numJugades;
            document.getElementById('jugada').innerHTML = numInput > secretNum ? 'El número es muy grande' : 'El número es muy pequeño';
            intentos.push(numInput);
            document.getElementById('intentos').innerHTML = intentos.join(', ');
        }

        // Deshabilitar botón si numJugades llega a 0
        if (numJugades === 0) {
            document.getElementById('main').style.backgroundColor = 'red';
            document.getElementById('footer').style.backgroundColor = 'red';
            document.getElementById('jugada').innerHTML = 'Perdiste!! Reinicia si quieres volver a jugar';
            document.getElementById("provaBoton").disabled = true;
            document.getElementById("reiniciarBoton").disabled = false;
            document.getElementById('interrogant').innerHTML = secretNum;
        }
    }
}
