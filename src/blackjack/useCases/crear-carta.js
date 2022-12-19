
/**
 * @param {String} carta  Carta sacada de la baraja 
 * @param {Number} turno  Turno del jugador
 * @param { Array<HTMLElement>}  figuresImg  Array de los elementos html donde se muestran las cartas
 */

export const crearCarta = (carta , turno , figuresImg) =>{
    if(!carta ||!figuresImg)
        throw new Error('Todos los campos son obligatorios')

    const imgCarta  = document.createElement('img');

    imgCarta.src = `../../public/assets/cartas/${carta}.png`;
    imgCarta.alt= 'Carta Baraja';
    imgCarta.classList.add('cartas');

    figuresImg[turno].append(imgCarta);
}