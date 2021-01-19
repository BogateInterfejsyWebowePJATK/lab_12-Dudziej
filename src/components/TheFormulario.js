import {useState} from 'react';


    function TheFormulario({setNewTable}) {
        const [newImie, setNewImie] = useState('');
        const [newNazwisko, setNewNazwisko] = useState('');
        const [wiek, setWiek] = useState('18-26');
        const [plec, setPlec] = useState('Chłop');
        const [student, setStudent] = useState(false);

        function _onChange(setter) {
            return event => {
                let target = event.target;
                console.log(target, target.value);
                setter(target.type === 'checkbox' ? target.checked : target.value);
        }
    }

    return (
        <div className="MyForm">
        <h1>Wypełnij Formularz</h1>
            <label>
                Imie:
                <input type="text" value={newImie} onChange={_onChange(setNewImie)}/>
            </label>
            <label>
                Nazwisko:
                <input type="text" value={newNazwisko} onChange={_onChange(setNewNazwisko)}/>
            </label>
            <div onChange={_onChange(setPlec)}>
                <label>
                    Chłop
                    <input type="radio" value="Man" checked={plec === "Chłop"}/>
                </label>
                <label>
                    Baba
                    <input type="radio" value="Woman" checked={plec === "Baba"}/>
                </label>
            </div>
            <label>
                Wiek:
                <select onChange={_onChange(setWiek)}>
                    <option>18-26</option>
                    <option>27-40</option>
                    <option>41-99</option>
                </select>
            </label>
            <label>
                Student
                <input type="checkbox" onChange={_onChange(setStudent)}/>
            </label>
            <button onClick={() => setNewTable({
                plec, wiek, student, newImie, newNazwisko
            })
            }>Submit
            </button>
            <button onClick={() => setNewTable({})}>Reset</button>
        </div>
    )
}
export default TheFormulario;