import { valorCarta } from "./valor-carta";

/**
 * @param {String} carta Carta sacada de la baraja 
 * @param {Number} turno Turno del jugador
 * @param {Array<Number>} puntosJugadores Array con la cantidad de jugadores 
 * @param {Array<HTMLElement>} smalls Array de elementos html donde se mostraran los puntos del usuario 
 * @returns {Number} Numero de puntos acomulados
 */

export const puntosAcomulados = ( carta ,turno , puntosJugadores , smalls) =>{
    puntosJugadores[turno] += valorCarta(carta);

    smalls[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}