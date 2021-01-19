import './App.css';
import ElLogowando from "./components/ElLogowando.jsx";
import goodPassword from "./data/daneLogowania.json";
import Wsio from './components/Wsio';

function App() {
    return (
        <div className="App">
        <Wsio userData={goodPassword} />
        </div>
    );
}
export default App;