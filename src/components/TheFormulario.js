import {useState} from 'react';

function avg(...args) {
    return args.map(i => Number(i)).reduce((i, j) => i + j) / args.length;
}

function TheFormulario() {
    const [newText, setNewText] = useState('');
    const [printText, setPrintText] = useState('0');
    return (
        <div className="TheFormulario">
            <h1>{printText}</h1>
            <input type="text" value={newText} onChange={(event => setNewText(event.target.value))}/>
            <button onClick={() => setPrintText(avg(...newText.split(' ')))}>Average</button>
        </div>
    )
}

export default TheFormulario;
