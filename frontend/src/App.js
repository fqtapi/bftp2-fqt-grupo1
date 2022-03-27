import './App.css';
import Home from "./home/Home";
import Navbar from "./components/header/Navbar";
import { Navigate, Route, Routes} from "react-router-dom";
import {New} from "./components/forms/New";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import React, {useEffect, useState} from "react";
import StockTable from "./table/StockTable";
import StocksApi from "./apis/StocksApi";
import Register from "./components/login/Register";
import Profile from "./components/login/Profile";



function App() {

    const stocksApi = new StocksApi();

    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [stocks, setStocks] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        if (loggedIn && requiresUpdate) {
            return stocksApi.getStocks()
                .then(setStocks)
            .then(_ => setRequiresUpdate(false));
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [requiresUpdate, loggedIn])


    const addStock = (stock) => {
        return stocksApi.addStock(stock)
            .then(_ => setRequiresUpdate(true))
    }

    const deleteStock = (stock, category) => {
        return stocksApi.deleteStock(stock)
            .then(_ => setRequiresUpdate(true))

    }

    const onCategoryClicked = (category) => {
        stocksApi.getStocks(category)
            .then(datos => setStocks(datos))
    }
    const addUser = (user) => {
        return stocksApi.addUser(user)
            .then(_ => setRequiresUpdate(true))
    }


    if (loggedIn) {
        return (
                <>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home onCategoryClicked={onCategoryClicked}/>}/>
                    <Route path="/new" element={<New addStock={addStock}/>}/>
                    <Route path="/profile" element={<Profile/> }/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/auth/signup" element={<Register addUser={addUser}/>}/>
                    <Route path="/stocks" element={<StockTable stocks={stocks} deleteStock={deleteStock}/>}/>
                    <Route path='*' element={<Navigate replace to="/"/>}/>
                </Routes>
                <Footer/>
                </>

        );
    }

    return <Login onSuccessfulLogin={() => setLoggedIn(true)}/>

}

export default App;