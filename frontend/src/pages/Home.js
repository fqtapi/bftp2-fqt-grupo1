import React from 'react';
import Card from "../components/Card";
import "./Home.css"


function Home() {
    const categories = ["Prendas", "Complementos", "Accesorios", "Cosméticos"]

    return (
        <section className="home-section">
            <div className="home">


                {categories.map((category, index) => <Card category={category} key={index}/>)}


            </div>
        </section>
    );
}

export default Home;