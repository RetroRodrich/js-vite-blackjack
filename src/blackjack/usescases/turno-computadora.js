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
        showAlert(
          puntosComputadora === puntosMinimos ? 'Nadie gana :(' :
          puntosMinimos > 21           ? 'Computadora gana'   :
          puntosComputadora > 21       ? 'Jugador Gana'       :
                                          'Computadora Gana'
        );
    }, 100);
}

// Al inicio del módulo, registrar el modal
const modal       = document.getElementById('alert-modal');
const modalMsg    = document.getElementById('alert-message');
const btnModalOk  = document.getElementById('btn-modal-close');

function showAlert(message) {
  modalMsg.innerText = message;
  modal.classList.add('show');
}

btnModalOk.addEventListener('click', () => {
  modal.classList.remove('show');
});
