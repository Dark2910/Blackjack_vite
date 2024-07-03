/**
 * Obtiene la imagen de la carta para mostrar en el HTML
 * @param {string} carta 
 * @returns {HTMLImageElemento} Imagen de retorno
 */
export const crearCartaHTML = (carta) =>{

    if( !carta ) throw new Error('Carta es un elemento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta
}