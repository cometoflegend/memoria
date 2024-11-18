import Carta from './Carta';
import './Carta.css';
import './Tablero.css';
import React, { useState, useEffect } from 'react';

//he codeado esto mientras sufría de dolores horribles y apenas añadí comentarios. me está costando un poco comprender todo para añadir comentarios extra. si hay un * en un comentario, ha sido añadido post-dolor

const cartasFlippeadas = [
  { id: 1, value: './res/aggron.webp' },
  { id: 1, value: './res/aggron.webp' },
  { id: 2, value: './res/garchomp.webp' },
  { id: 2, value: './res/garchomp.webp' },
  { id: 3, value: './res/coalossal.webp' },
  { id: 3, value: './res/coalossal.webp' },
  { id: 4, value: './res/gengar.webp' },
  { id: 4, value: './res/gengar.webp' },
  { id: 5, value: './res/glaceon.webp' },
  { id: 5, value: './res/glaceon.webp' },
  { id: 6, value: './res/krookodile.webp' },
  { id: 6, value: './res/krookodile.webp' },
  { id: 7, value: './res/lycanroc.webp' },
  { id: 7, value: './res/lycanroc.webp' },
  { id: 8, value: './res/sandslash.webp' },
  { id: 8, value: './res/sandslash.webp' },
  { id: 9, value: './res/typhlosion.webp' },
  { id: 9, value: './res/typhlosion.webp' },
  { id: 10, value: './res/tyrantrum.webp' },
  { id: 10, value: './res/tyrantrum.webp' },

  // * Aquí dupliqué las cartas. He hecho un arreglo de última hora poniendo el mismo id a cada carta, porque si no la comparación de abajo no tiene sentido.
];

function Tablero() {

  const shuffle = (cartas) => {

    return cartas.sort(() => Math.random() - 0.5);

  }

  const [cartas, setCartas] = useState(shuffle(cartasFlippeadas));
  const [cartasFlippeadasState, setCartasFlippeadas] = useState([]);
  const [cartasMatcheadas, setCartasMatcheadas] = useState([]);

  useEffect(() => {

    // * Lógica de emparejamiento de carta

    if (cartasFlippeadasState.length === 2) {
      const [firstId, secondId] = cartasFlippeadasState;
      const firstCarta = cartas.find(carta => carta.id === firstId);
      const secondCarta = cartas.find(carta => carta.id === secondId);

      // * Checkea si las cartas coinciden

      if (firstCarta.value === secondCarta.value) {
        setCartasMatcheadas(prev => [...prev, firstId, secondId]);
      }

      // Resetear tras pasar tiempo
      setTimeout(() => {
        setCartasFlippeadas([]);
      }, 1000);
    }
  }, [cartasFlippeadasState, cartas]);  


  // * Aquí se maneja el click de las cartas
  
  const handleCartaClick = (id) => {
    if (cartasFlippeadasState.length === 2) return; // No se hace nada si las cartas ya están flippeadas

    // Checkeo de si la carta matchea o está flippeada
    if (cartasMatcheadas.includes(id) || cartasFlippeadasState.includes(id)) return;

    setCartasFlippeadas(prev => [...prev, id]);
  };

  return (
    <div className="grid">
      {cartas.map((carta) => (
        <Carta
          key={carta.id}
          id={carta.id}
          val={carta.value}
          isFlipped={cartasFlippeadasState.includes(carta.id) || cartasMatcheadas.includes(carta.id)}
          onClick={handleCartaClick}
        />
      ))}
    </div>
  );
};

export default Tablero;
