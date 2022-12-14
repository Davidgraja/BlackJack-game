/**
 * Funcion que lanza los mensajes al usuario
 * @param { String } text -Mensaje al usuario
 * @param { Number } time -Tiempo de duracion del mensaje en pantalla  en Milisegundos
 */

export const message = (text , time) =>{
    const divContainer = document.createElement('div'),
        bodyHtml = document.body;

    divContainer.classList.add('message');
    divContainer.innerText = text;
    bodyHtml.appendChild(divContainer)

    setTimeout(()=>{
        bodyHtml.removeChild(divContainer)
    }, time)
}