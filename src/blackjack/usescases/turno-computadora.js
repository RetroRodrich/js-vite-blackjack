import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * @param {Number} puntosMinimos puntos minimos que necesita para ganar
 * @param {Array<string>} deck 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {

    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML son necesarios');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
