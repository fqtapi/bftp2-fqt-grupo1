import './App.css';
import Home from "./home/Home";
import Navbar from "./components/header/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {New} from "./components/forms/New";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import React, {useEffect, useState} from "react";
import StockTable from "./table/StockTable";
import StocksApi from "./apis/StocksApi";


function App() {

    const stocksApi = new StocksApi();

    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [stocks, setStocks] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        if (requiresUpdate) {
            return stocksApi.getStocks()
                .then(setStocks)
            .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])


    const addStock = (stock) => {
        return stocksApi.addStock(stock)
            .then(_ => setRequiresUpdate(true))
    }


    const onCategoryClicked = (category) => {
        stocksApi.getStocks(category)
            .then(datos => setStocks(datos))

    }


    if (loggedIn) {
        return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home onCategoryClicked={onCategoryClicked}/>}/>
                    <Route path="/new" element={<New addStock={addStock}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/stocks" element={<StockTable stocks={stocks}/>}/>
                    <Route path='*' element={<Navigate replace to="/"/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        );
    }

    return <Login onSuccessfulLogin={() => setLoggedIn(true)}/>

}

export default App;