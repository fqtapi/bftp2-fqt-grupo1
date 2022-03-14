import React from 'react';
import "./Card.css"
import prendas from '../../assets/img-cards/prendas.jpg';


function Card({category, onClick}) {
    return (   <div className="stock-form">
        <div className="card" onClick={onClick}>
            <img src={prendas} className="img-card" alt="prendas"/>
            <button className="button" onClick={onClick}>{category}</button>

        </div>

</div>
    );
}

export default Card;