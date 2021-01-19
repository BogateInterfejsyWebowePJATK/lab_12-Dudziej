function Tabellero(props) {
    return (
        <table>
            {Object.keys(props).map(i =>
                <tr>
                    <td>{i}</td>
                    <td>{props[i].toString()}</td>
                </tr>
            )}
        </table>
    )
}

export default Tabellero;
