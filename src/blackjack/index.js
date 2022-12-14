
import { turnoComputadora ,puntosAcomulados , pedirCarta , crearDeck , crearCarta } from './useCases';
import _ from 'underscore'

(()=>{
    'use strict'

    let deck = [];

    const tipos = ['C','H','D' ,'S'],
    especiales = ['A','J','Q','K'];

  // Puntos del jugador y de la computadora
    let puntosJugadores= [];

  // referencias al html
    const btnPedir = document.querySelector('#btn-Pedir'),
    btnDetener = document.querySelector('#btn-Detener'),
    btnNuevoJuego = document.querySelector('#btn-NuevoJuego'),
    smalls = document.querySelectorAll('small'),
    figuresImg = document.querySelectorAll('figure') ;   


  //funcion que inicializa el juego
    const inicializarJuego = (numJugadores = 2)=> {
        deck= crearDeck( tipos ,  especiales );
        puntosJugadores=[];

        for( let i = 0 ; i < numJugadores; i++) {
            puntosJugadores.push(0)
        }
        
        smalls.forEach(ele => ele.innerText = 0)

        figuresImg.forEach(ele => ele.innerHTML = "")
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

  // Evento al pedir una carta
    btnPedir.addEventListener('click' , ()=> {
        const carta = pedirCarta(deck);

        btnNuevoJuego.disabled = true;
        let puntosJugador = puntosAcomulados(carta , 0 , puntosJugadores ,  smalls);

        crearCarta(carta , 0 , figuresImg);

        if(puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            turnoComputadora( puntosJugador, deck, puntosJugadores,smalls , figuresImg , btnNuevoJuego);
        }
        else if (puntosJugador ===21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;

          turnoComputadora( puntosJugador, deck, puntosJugadores , smalls , figuresImg , btnNuevoJuego );
        }
    });

  // Evento detener juego
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugadores[0], deck, puntosJugadores , smalls , figuresImg , btnNuevoJuego)
    });

  // Evento nuevo juego
    btnNuevoJuego.addEventListener('click' , ()=> {

        inicializarJuego();
        
    })

    inicializarJuego()

})();