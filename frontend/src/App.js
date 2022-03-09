import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import {Route} from "react-router-dom";

function Routes(props) {
  return null;
}

Routes.propTypes = {children: PropTypes.node};

function App() {

  const [coders, setCoders] = useState([]);


  useEffect( () => {
    fetch("/stocks")
        .then(response => response.json())
        .then(setCoders);
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
