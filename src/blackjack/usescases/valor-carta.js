/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */

export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 14 :
        (valor === 'K') ? 13 :
        (valor === 'Q') ? 12 : 11
        : valor * 1;
}