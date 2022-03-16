import React from 'react';
import "./Card.css"
import prendasimg from '../../assets/img-cards/prendas.jpg';
import accesoriosimg from "../../assets/img-cards/accesorios.jpg";
import complementosimg from "../../assets/img-cards/complementos.jpg";
import cosmeticosimg from "../../assets/img-cards/cosmeticos.jpg";

function Card({category, onClick}) {


    if (category === "Prendas") {
        return (
            <div className="stock-form">
                <div className="card" onClick={onClick}>
                    <img src={prendasimg} className="img-card" alt="prendas"/>
                    <button className="css-button-rounded--red" onClick={onClick}>{category}</button>
                </div>
            </div>
        )
    } else if (category === "Accesorios") {
        return (
            <div className="stock-form">
                <div className="card" onClick={onClick}>
                    <img src={accesoriosimg} className="img-card" alt="accesorios"/>
                    <button className="css-button-rounded--red" onClick={onClick}>{category}</button>
                </div>
            </div>
        )
    } else if (category === "Complementos") {
        return (
            <div className="stock-form">
                <div className="card" onClick={onClick}>
                    <img src={complementosimg} className="img-card" alt="complementos"/>
                    <button className="css-button-rounded--red" onClick={onClick}>{category}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="stock-form">
                <div className="card" onClick={onClick}>
                    <img src={cosmeticosimg} className="img-card" alt="cosmeticos"/>
                    <button className="css-button-rounded--red" onClick={onClick}>{category}</button>
                </div>
            </div>
        )
    }
}

export default Card;