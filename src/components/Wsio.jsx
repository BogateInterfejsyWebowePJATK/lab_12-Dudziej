import React from "react";
import ElLogowando from "./ElLogowando";
import Formulario from "./Formulario";
import Rejestrowando from "./Rejestrowando";

export default function Wsio({userData}) {

    const [typ, setTyp] = React.useState(userData) 
    const [zalogowany, setZalogowany] = React.useState(false)
    const [rejestracja, setRejestracja] = React.useState(false)
    const [zrobiony, setZrobiony] = React.useState()

    const rejestrujTypa = (user) => {
        let u = [...typ]
        u.push(user)
        setTyp(u)
        setRejestracja(false)
    }

    const logujTypa = (e) => {
        setZalogowany(true)
        setZrobiony(e)
    }

    const wylogujTypa = () => {
        setZalogowany(false)
    }

    return (
        <>
            {zalogowany ?
                <Formulario user={zalogowany} logout={wylogujTypa} />
                :
                <>
                    {rejestracja ?
                        <Rejestrowando handleRegister={rejestrujTypa}/>
                        :
                        <>
                            <ElLogowando usersData={typ} onLogin={logujTypa}/>
                            <button onClick={() => setRejestracja(true)}>Register</button>
                        </>
                    }
                </>
            }

        </>
    );
}