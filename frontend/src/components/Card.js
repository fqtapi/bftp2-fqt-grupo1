import React from 'react';
import "./Card.css"

import {Link} from "react-router-dom";

function Card({category}) {
    return (   <div className="stock-form">
        <div className="card">
            <img/>
            <Link role="button" className="button" to="/stock-category">{category}</Link>

        </div>

</div>
    );
}

export default Card;