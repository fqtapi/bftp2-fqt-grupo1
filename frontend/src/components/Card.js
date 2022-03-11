import React from 'react';
import "./Card.css"

function Card({category}) {
    return (
        <div className="card">
            <img/>
            <button>{category}</button>
        </div>
    );
}

export default Card;