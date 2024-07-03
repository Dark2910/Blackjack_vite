/**
 * Obtinen el valor de la carta tomada
 * @param {string} carta Ejemplo: 10D
 * @returns {number} Retorna el valor de la carta recibida
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}