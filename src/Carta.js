import './Carta.css';
import React from 'react';
import image from './res/card-back.png'

function Carta({ id, val, isFlipped, onClick }) {
    return (
      <button className="carta" onClick={() => onClick(id)}>
        <div className={`carta-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="carta-front">
            <img src={image} alt="Card back" />
          </div>
          <div className="carta-back">
            <img src={val} alt="Card front" />
          </div>
        </div>
      </button>
    );
  }

export default Carta;

