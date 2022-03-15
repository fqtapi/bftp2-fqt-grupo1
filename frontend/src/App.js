import './App.css';
import Home from "./home/Home";
import Navbar from "./components/header/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {New} from "./components/forms/New";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import React, {useState} from "react";
import StockTable from "./table/StockTable";


function App() {


    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [stocks, setStocks] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);



    const addStock = (stock) => {
        return fetch("http://localhost:8081"),
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(stock)
            }
    .then(_ => setRequiresUpdate(true))

    }


    const onCategoryClicked = (category) => {
        console.log(category)

        fetch(`http://localhost:8081/stocks?category=${category}`)
            .then(r => r.json())
            .then(datos => setStocks(datos))

    }


    if (loggedIn) {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home onCategoryClicked={onCategoryClicked}/>} />
                    <Route path="/new" element={<New stocks={stocks} />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/stocks" element={<StockTable stocks={stocks}  />}/>
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        );
    }

    return <Login onSuccessfulLogin={() => setLoggedIn(true)}/>

}

export default App;
