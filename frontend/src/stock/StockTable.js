
 const StockTable = ({stocks}) => {
    return <table>
        {stocks.map( stock =>
            <tr>
                <td>{stock.codigo}</td>
                <td>{stock.descripcion}</td>
                <td>{stock.category}</td>
                <td>{stock.cantidad}</td>
            </tr>
        )}
    </table>
}

export default StockTable;