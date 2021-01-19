import React from "react";
import '../App.css'

export default function Formulario({user, logout = f => f}) {

    return (
        <table>
            <tbody>
                <tr>
                    <td>Imie</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Nazwisko</td>
                    <td>{user.surname}</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>zgoda?</td>
                    <td>{user.agreement ? "tak" : "nie"}</td>
                </tr>
                <tr>
                    <td>data urodzenia</td>
                    <td>{user.birthdate}</td>
                </tr>
                <tr>
                    <td>zdjęcie</td>
                    <td><img src={user.image} alt={user.image}/></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button onClick={logout}>Wyloguj</button>    
                    </td>
                </tr>
            </tbody>
        </table>    
    );
}