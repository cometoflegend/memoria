import './Carta.css';
import React from 'react';
import image from './res/card-back.png'

function Carta() {

    const Carta = ({ id, val, isFlipped, onClick }) => {

        return (

            <div className="carta" onClick={() => onClick(id)}>

                <div className={`carta-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="carta-front">
                        {image}
                    </div>
                    <div className="carta-back">
                        {val}
                    </div>
                </div>
            </div>


        );

    }
}

export default Carta;

