import './App.css';
import Home from "./pages/Home";
import {StockCatalog} from "./components/StockCatalog";

function App() {

    return (
        <div className="App">
            <Home/>
            <StockCatalog/>
        </div>
    );
}

export default App;
