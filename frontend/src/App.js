import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import New from "./components/New";
import Login from "./components/Login";
import Footer from "./components/Footer";
import React, {useState} from "react";
import StockTable from "./stock/StockTable";

function App() {

    // GET /stocks?category={?}
    const [category, setCategory]=useState([]);
    const [stocks, setStocks] = useState([])

    const onCategoryClicked = (category) => {
        console.log(category)

        // guardar la categoría (useState)

        fetch(`http://localhost:8081/stocks?category=${category}`)
            .then(r => r.json())
            .then(datos => setStocks(datos))




    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home onCategoryClicked={onCategoryClicked}/>} />
                <Route path="/new" element={<New/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/stocks" element={<StockTable stocks={stocks}  />}/>
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
