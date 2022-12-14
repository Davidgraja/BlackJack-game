import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./ganador";
import { pedirCarta } from "./pedir-carta";
import { puntosAcomulados } from "./puntos-acomulados";

/**
 * Función que determina los puntos de la computadora y el ganador del juego 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<HTMLElement>} smalls 
 * @param {Array<HTMLElement>} figuresImg 
 * @param {HTMLElement} btnNuevoJuego 
 */
// Turno de la computadora
export const turnoComputadora = (  puntosMinimos , deck , puntosJugadores , smalls , figuresImg , btnNuevoJuego) =>{
    let puntosComputadora = 0;
    const turno =  puntosJugadores.length - 1;
    do{

        const carta = pedirCarta(deck);

        puntosComputadora = puntosAcomulados( carta , turno , puntosJugadores , smalls );
        
        crearCarta(carta  ,  turno , figuresImg);
        
        if( puntosMinimos > 21) break;
        
        
    } while( ( puntosComputadora  < puntosMinimos) && (puntosMinimos <=21) );

    determinarGanador( puntosJugadores , btnNuevoJuego);
}