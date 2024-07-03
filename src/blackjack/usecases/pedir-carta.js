/**
 * Toma una carta del deck
 * @param {Array<String>} deck Es un arreglo de string, ejemplo: ['AS', '10D', '5H', 'KD', 'AC']
 * @returns {string} Retorna una carta del deck
 */

export const pedirCarta = (deck) =>{

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop();
    return carta;
}