import React from "react";
import '../App.css'
import goodPassword from "../data/daneLogowania.json";

export default function ElLogowando() {
    const [zalogowany, setZalogowany] = React.useState(false)
    const [dane, setDane] = React.useState({
        email: '',
        haslo: ''
    })

    const [error, setError] = React.useState({
        email: '',
        haslo: '',
        powiadomienie: ''
    })

    const submit = (event) => {
        event.preventDefault()
        if(check()) {
            setZalogowany(true)
        }
    }

    const check = () => {
        let errors = {}
        
        if (!dane["haslo"]) {
            errors["haslo"] = "No podaj to hasło w końcu!"
        }
        
        if (!dane["email"]) {
            errors["email"] = "Nieprawidłowy email. Podaj poprawny żebyśmy mogli przysyłać scam maile..."
        }
        
        if (typeof dane["email"] !== undefined) {
            
            let dopuszczonko = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            
            if (!dopuszczonko.test(dane["email"])) {
                errors["email"] = "Nieprawidlowy email"
            }
        }
        
        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            
            if (dane["email"] === goodPassword.email && dane["haslo"] === goodPassword.haslo) {
                return true
            } else {
                errors["powiadomienie"] = "Niepoprawne dane, spróbuj ponownie"
            }
        }
        
        setError(errors);
        return false
    } 
    
    const setZmiana = (event) => {
        setError({})
        setZalogowany(false)
        let input = {...dane};
        input[event.target.name] = event.target.value;
        setDane(input);
    }
    return (
        <form onSubmit={submit}>
            <h1>Logowanie</h1>
            <label>Email: </label>
            <input value={dane.email} name="email" id="email" type="email" onChange={setZmiana}/><br/>
            <div className="err">{error.email}</div>
            <label>Hasło: </label>
            <input value={dane.haslo} name="haslo" id="haslo" type="password" onChange={setZmiana}/><br/>
            <div className="err">{error.haslo}</div>    
            <input type="submit" value="Loguj"/>
            <div className="err">{error.powiadomienie}</div>  
            {zalogowany && <div className="success">Zalogowano...</div>}
        </form>
    );
} 
