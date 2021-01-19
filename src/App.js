import './App.css';
import TheFormulario from "./components/TheFormulario";
import Tabellero from "./components/Tabellero";
import {useState} from "react";

function App() {
    const [newTable, setNewTable] = useState({});
    return (
        <div className="App">
        <TheFormulario setNewTable={setNewTable}/>
            <Tabellero {...newTable}/>
        </div>
    );
}
export default App;