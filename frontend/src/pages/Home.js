import React from 'react';
import Card from "../components/Card";
import "./Home.css"




function Home(){

    const categories =["Prendas", "Complementos", "Accesorios", "Cosméticos"]

    return (
        <div className="home">


                {categories.map((category, index)=><Card category={category} key={index}/>)}





        </div>
    );
}

export default Home;