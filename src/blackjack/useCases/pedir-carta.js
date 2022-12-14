
/**
 * @param {Array<String>} deck
 * @returns {String} Esta funcion retorna una carta del deck y a su vez lo elimina de la baraja
 */

export const pedirCarta = (deck) =>{
    if(!deck ||deck.length ===0) alert('Ya no cartas en la baraja');
    return deck.pop();    
}
