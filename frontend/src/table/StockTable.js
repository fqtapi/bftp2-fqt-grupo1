import React, {useState} from "react";
import "./Table.css";
import {FaEdit} from 'react-icons/fa';
import {Link} from "react-router-dom";

const QuantityPopup = ({onQuantityChanged}) => {

    const [quantity, setQuantity] = useState(0);

    return <div>
        <input type="number" onChange={(e) => setQuantity(e.target.valueAsNumber)}/>
        <input type="submit" onClick={() =>onQuantityChanged(quantity)} value="Add"/>
    </div>;
}

const StockTable = ({stocks}) => {

    const [showPopup, setShowPopup] = useState(false);

    const mostrarPopupParaSumar = stock => {
        setShowPopup(true);



    };

    // necesito pasarle el objeto stock que estoy modifica
    const onQuantityAdded = (qty) => {
        //modificar el objeto stock para actualizar la cantidad
        console.log("Enviando " + qty)
        // en lugar de hacer un console.log hare un fetch "PUT /api/tocks
        setShowPopup(false)

    }

    return (


        <div className="table-container">
            {showPopup && <QuantityPopup onQuantityChanged={onQuantityAdded}/>}
            <h1 className="categoryList-title">Stock</h1>


            <section className='categoryList'>
                <div className='table-list'>
                    <tr className='category-table-title'>
                        <th className='stock-th'>Código</th>
                        <th className='stock-th'>Descripcion</th>
                        <th className='stock-th'>Category</th>
                        <th className='stock-th'>Cantidad</th>
                        <th className='stock-th'/>

                        <th className='stock-th'>Modificar</th>
                    </tr>

                    {stocks
                        // sort by codigo
                        .map(stock =>
                            <tr className='category-table-row' key={stock.id} stock={stock}>
                                <td className="category-td">{stock.codigo}</td>
                                <td className="category-td">{stock.descripcion}</td>
                                <td className="category-td">{stock.category}</td>
                                <td className="category-td" style={stock.cantidad === 0 ? {
                                    fontSize: 25,
                                    color: "red"
                                } : {}}>{stock.cantidad}</td>
                                <td className="category-td">
                                    <>
                                        <button onClick={() => mostrarPopupParaSumar(stock)}>+</button>
                                        <button>-</button>
                                    </>
                                </td>
                                <td className="category-td-link">
                                    <Link className="btn-orange-link" to="/new"
                                          state={{data: stock}}><FaEdit fixedWidth style={{color: 'red'}}/></Link>
                                </td>
                            </tr>
                        )}
                </div>
            </section>
        </div>
    );
}


export default StockTable;