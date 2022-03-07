import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [coders, setCoders] = useState([]);


  useEffect( () => {
    fetch("/coders")
        .then(response => response.json())
        .then(setCoders);
  })

  return (
    <div className="App">
      { coders.map ( c => <p>{`Tenemos en clase a ${c.name} (${c.email})`}</p>)}
    </div>
  );
}

export default App;
