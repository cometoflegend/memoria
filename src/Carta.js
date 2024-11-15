import './Carta.css';
import React from 'react';
import image from './res/card-back.png'

function Carta({ id, val, isFlipped, onClick }) {
    return (
      <div className="carta" onClick={() => onClick(id)}>
        <div className={`carta-inner ${isFlipped ? 'flipped' : ''}`}>
          <div className="carta-front">
            {/* Display the card-back image */}
            <img src={image} alt="Card back" />
          </div>
          <div className="carta-back">
            {/* Display the value (image) when the card is flipped */}
            <img src={val} alt="Card front" />
          </div>
        </div>
      </div>
    );
  }

export default Carta;

