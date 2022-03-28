const puntos = document.getElementById('puntos');
const Sseleccion = document.querySelector('.seleccion');
const obj = document.getElementById('objetos');
const aceptarOpcion = document.getElementById('aceptar');
const Sresultado = document.querySelector('.resultado');
const afirmar = document.getElementById('afirmacion');
const resultPersona = document.getElementById('resultadoP');
const resultMaquina = document.getElementById('resultadoM');
const sigRonda = document.getElementById('sig-ronda');
const Sfinalizar = document.querySelector('.finalizar');
const afirmarFinal = document.getElementById('afir-final');
const btnContinuar = document.getElementById('continuar');

let points = 0;
let pointsM = 0;

const objetos = [
    'piedra', 
    'papel', 
    'tijera'
];

function comprobar() {
        Sseleccion.style.display = "none";

        Sresultado.style.display = "flex";

        let objetoMaquina = objetos[Math.floor(Math.random() * (2 - 0))];

        switch (obj.value) {
            case 'piedra':
                resultMaquina.innerHTML = objetoMaquina;
                resultPersona.innerHTML = obj.value;
    
                if (objetoMaquina == 'piedra') {
                    afirmar.innerHTML = 'Empate';
                }
                else if (objetoMaquina == 'papel') {
                    afirmar.innerHTML = 'Perdiste';
                    afirmarFinal.innerHTML = 'Perdiste';
                    pointsM++;
                }
                else if (objetoMaquina == 'tijera') {
                    afirmar.innerHTML = 'Ganaste';
                    afirmarFinal.innerHTML = 'Ganaste';
                    points++;
                }
                break;
            case 'papel':
                resultMaquina.innerHTML = objetoMaquina;
                resultPersona.innerHTML = obj.value;
    
                if (objetoMaquina == 'piedra') {
                    afirmar.innerHTML = 'Ganaste';
                    afirmarFinal.innerHTML = 'Ganaste';
                    points++;
                }
                else if (objetoMaquina == 'papel') {
                    afirmar.innerHTML = 'Empate';
                }
                else if (objetoMaquina == 'tijera') {
                    afirmar.innerHTML = 'Perdiste';
                    afirmarFinal.innerHTML = 'Perdiste';
                    pointsM++;
                }
                break;
            case 'tijera':
                resultMaquina.innerHTML = objetoMaquina;
                resultPersona.innerHTML = obj.value;
    
                if (objetoMaquina == 'piedra') {
                    afirmar.innerHTML = 'Perdiste';
                    afirmarFinal.innerHTML = 'Perdiste';
                    pointsM++;
                }
                else if (objetoMaquina == 'papel') {
                    afirmar.innerHTML = 'Ganaste';
                    afirmarFinal.innerHTML = 'Ganaste';
                    points++;
                }
                else if (objetoMaquina == 'tijera') {
                    afirmar.innerHTML = 'Empate';
                }
                break;
            default: console.log('No funciono');
        }

        puntos.innerHTML = points;

        console.log('Puntos user: ' + points);
        console.log('Puntos maquina: ' + pointsM);
}   

function sigR() {
    if (points < 3 && pointsM < 3) {
        Sseleccion.style.display = 'flex';

        Sresultado.style.display = 'none';
    }
    else if (points == 3 || pointsM == 3) {
        Sresultado.style.display = 'none';

        Sfinalizar.style.display = 'flex';

        btnContinuar.addEventListener('click', finalizar);
    }
}

function finalizar() {
    points = 0;
    pointsM = 0;

    puntos.innerHTML = '0';

    Sfinalizar.style.display = 'none';

    Sseleccion.style.display = 'flex';
}

aceptarOpcion.addEventListener('click', comprobar);
sigRonda.addEventListener('click', sigR);