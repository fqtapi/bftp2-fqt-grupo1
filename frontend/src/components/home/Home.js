import React from 'react';
import Card from "../card/Card";
import "./Home.css"
import {useNavigate} from "react-router-dom";

function Home({onCategoryClicked}) {
    const categories = ["Prendas", "Complementos", "Cosméticos"]

    const navigate = useNavigate();

    return (

        <section className="home-section">
            <br/><br/>
            <h1>GESTION DE STOCK</h1>
            <div className="home">
                {categories.map((category, index) =>
                    <Card
                        category={category} key={index}
                        onClick={() => {
                            onCategoryClicked(category);
                            navigate("/stocks/")
                        }}
                    />)}


            </div>
        </section>
    );
}

export default Home;