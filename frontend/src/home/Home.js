import React from 'react';
import Card from "../components/card/Card";
import "./Home.css"
import {useNavigate} from "react-router-dom";

function Home({onCategoryClicked}) {
    const categories = ["Prendas", "Complementos", "Cosméticos"]

    const navigate = useNavigate();

    return (
        <section className="home-section">
            <div className="home">


                {categories.map((category, index) =>
                    <Card
                        category={category} key={index}
                        onClick={() => {
                            onCategoryClicked(category);
                            navigate("/stocks")
                        }}
                    />)}


            </div>
        </section>
    );
}

export default Home;