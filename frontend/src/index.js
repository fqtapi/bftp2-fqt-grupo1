import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {StockCatalog} from "./components/StockCatalog";
import NavBar from "./components/NavBar";
import New from "./components/New";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StockPrendas from "./stock/StockPrendas";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New/>} />
                <Route path="/loguin" element={<Login/>} />
                <Route path="/stocks" element={<StockCatalog />} />
                <Route path="/stock-category" element={<StockPrendas/>}/>
                <Route path='*' element={<Navigate reaplace to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
