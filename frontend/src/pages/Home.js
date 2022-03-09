import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="home">
            <Navbar />
            <h1>Aquí va el home</h1>
            <Footer/>
        </div>
    );
}

export default Home;