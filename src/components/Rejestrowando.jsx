import React from "react";
import '../App.css'

export default function Rejestrowando({rejestrujTypa = f => f}) {


    const [dane, setDane] = React.useState({})
    const [error, setError] = React.useState({})


    const submit = (event) => {
        event.preventDefault()
        if (check("", dane, true)) {
            rejestrujTypa(dane)
            alert("Zarejestrowano!")
        }
    }

    const setZmiana = (event) => {
        let input = {...dane};
        if (event.target.type === "checkbox") {
            input[event.target.name] = !input[event.target.name]
        } else {
            input[event.target.name] = event.target.value;
        }
        check(event.target.name, input, false)
    }

    const check = (fieldName, inp, all) => {
        let input = {...inp}
        let err = true;
        let errs = {...error}
        delete errs["message"]
        if (fieldName === "name" || all) {
            if (!input["name"]) {
                errs["name"] = "Podaj imię"
                err = false
            } else {
                delete errs["name"]
            }
        }
        if (fieldName === "surname" || all) {
            if (!input["surname"]) {
                errs["surname"] = "Podaj nazwisko"
                err = false
            } else {
                delete errs["surname"]
            }
        }
        if (fieldName === "email" || all) {
            if (!input["email"]) {
                errs["email"] = "Podaj email"
                err = false
            } else {
                let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
                if (!pattern.test(input["email"])) {
                    errs["email"] = "Nieprawidlowy email"
                    err = false
                } else {
                    delete errs["email"]
                }
            }     
        }
        if (fieldName === "password" || all) {
            if (!input["password"]) {
                errs["password"] = "Podaj hasło"
                err = false
            } else {
                let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                if (!pattern.test(input["password"])) {
                    errs["password"] = "podałes za słabe hasło"
                    err = false
                } else {
                    delete errs["password"]
                }
            }     
        }
        if (fieldName === "birthdate" || all) {
            if (!input["birthdate"]) {
                errs["birthdate"] = "Podaj date wyklucia"
                err = false
            } else {
                let userDate = new Date(input["birthdate"])
                let now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
                let dob = userDate.getFullYear() * 10000 + userDate.getMonth() * 100 + userDate.getDay() * 1; // Coerces strings to integers

                if (now - dob < 180000) {
                    errs["birthdate"] = "Niepełnoletni spadówa"
                    err = false
                } else {
                    delete errs["birthdate"]
                }
            }
        }
        if (fieldName === "agreement" || all) {
            if (!input["agreement"]) {
                errs["agreement"] = "No weź zaznacz"
                err = false
            } else {
                delete errs["agreement"]
            }
        }
        if(!err) errs["message"] = "Tyle błędów, weź to popraw..."
        setError(errs)
        setDane(input)
        return err
    }

    const reset = () => {
        setDane({
            name: "",
            surname: "",
            email: "",
            password: "",
            birthdate: "",
            agreement: false,
            image: ""
        })
        setError({})
    }

    return (
        <form onSubmit={submit}>
            <h1>Rejestracja</h1>
            <label>Imie: </label>
            <input value={dane.name} type="text" name="name" onChange={setZmiana}/><br/>
            <div className="err">{error.name}</div> 

            <label>Nazwisko: </label>
            <input value={dane.surname} type="text" name="surname" onChange={setZmiana}/><br/>
            <div className="err">{error.surname}</div> 

            <label>Email: </label>
            <input value={dane.email} name="email" type="text" onChange={setZmiana}/><br/>
            <div className="err">{error.email}</div>

            <label>Hasło: </label>
            <input value={dane.password} name="password" type="password" onChange={setZmiana}/><br/>
            <div className="err">{error.password}</div> 

            <label>Zdjęcie: </label>
            <input type="file" accept="image/*" name="image" onChange={setZmiana}/>
            <div className="err">{error.photo}</div> 

            <label>Data urodzenia: </label>
            <input value={dane.birthdate} name="birthdate" type="date" onChange={setZmiana}/><br/>
            <div className="err">{error.birthdate}</div>

            <label>ZAZNACZ TO: </label>
            <input type="checkbox" checked={dane.agreement} name="agreement" onChange={setZmiana}/><br/>
            <div className="err">{error.agreement}</div> 

            <button type="button"  onClick={() => reset()}>Reset</button>
            <input type="submit" value="Rejestruj"/>
            <div className="err">{error.message}</div>  
        </form>
    );
}