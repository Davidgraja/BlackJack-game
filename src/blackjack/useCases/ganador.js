import {message} from './messages-user'
/**
 * Funcion que determina el ganador de la partida
 * @param {Array<Number>} puntosJugadores Array con los puntos de los jugadores
 * @param {HTMLElement} btnNuevoJuego Elemento html que hablita el botom nuevo juego
 */

export const determinarGanador = (puntosJugadores , btnNuevoJuego ) =>{
    const [ puntosMinimos, puntosComputadora] = puntosJugadores; 
    
    if(puntosComputadora > 21) message('Has ganado 🎉' , 4000)
    else if (puntosMinimos > 21) message('Has pasado  de 21 puntos, 😢 has perdido' , 3000)
    else if (puntosMinimos === puntosComputadora) message('empate' , 2000)
    else message('ha gado la computadora' , 2000)
    btnNuevoJuego.disabled = false
}
