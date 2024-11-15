import Carta from './Carta';
import './Carta.css';
import './Tablero.css';
import React, { useState } from 'react';


const cartasFlippeadas = [
  { id: 1, value: './res/aggron.webp' },
  { id: 2, value: './res/aggron.webp' },
  { id: 3, value: './res/garchomp.webp' },
  { id: 4, value: './res/garchomp.webp' },
  { id: 5, value: './res/coalossal.webp' },
  { id: 6, value: './res/coalossal.webp' },
  { id: 7, value: './res/gengar.webp' },
  { id: 8, value: './res/gengar.webp' },
  { id: 9, value: './res/glaceon.webp' },
  { id: 10, value: './res/glaceon.webp' },
  { id: 11, value: './res/krookodile.webp' },
  { id: 12, value: './res/krookodile.webp' },
  { id: 13, value: './res/lycanroc.webp' },
  { id: 14, value: './res/lycanroc.webp' },
  { id: 15, value: './res/sandslash.webp' },
  { id: 16, value: './res/sandslash.webp' },
  { id: 17, value: './res/typhlosion.webp' },
  { id: 18, value: './res/typhlosion.webp' },
  { id: 19, value: './res/tyrantrum.webp' },
  { id: 20, value: './res/tyrantrum.webp' },
];

function Tablero() {

  const shuffle = (cartas) => {

    return cartas.sort(() => Math.random() - 0.5);

  }

  const [cartas, setCartas] = useState(shuffle(cartasFlippeadas));
  const [cartasFlippeadasState, setCartasFlippeadas] = useState([]);
  const [cartasMatcheadas, setCartasMatcheadas] = useState([]);

  const handleCartaClick = (id) => {
    if (cartasFlippeadasState.length === 2) return; // No se hace nada si las cartas ya están flippeadas

    const carta = cartas.find(carta => carta.id === id);

    // Si la carta ya está emparejada, no se hace nada
    if (cartasMatcheadas.includes(id) || cartasFlippeadasState.includes(id)) return;

    // Voltear cartas
    setCartasFlippeadas(prev => [...prev, id]);

    // Si ya hay dos cartas volteadas, se verifica si coinciden
    if (cartasFlippeadasState.length === 1) {
      const firstCarta = cartas.find(carta => carta.id === cartasFlippeadasState[0]);
      const secondCarta = carta;

      if (firstCarta.value === secondCarta.value) {
        setCartasMatcheadas(prev => [...prev, firstCarta.id, secondCarta.id]);
      }

      // Resetear tras pasar tiempo
      setTimeout(() => {
        setCartasFlippeadas([]);
      }, 1000);
    }
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
