import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";




function Home(){

    const categories =["Prendas", "Complementos", "Accesorios", "Cosméticos"]

    return (
        <div className="home">
            <Navbar />

                {categories.map((category, index)=><Card category={category} key={index}/>)}

            <Footer/>
        </div>
    );
}

export default Home;