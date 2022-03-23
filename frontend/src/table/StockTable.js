import React, {useState} from "react";
import "./Table.css";
import {FaEdit} from 'react-icons/fa';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FaRegPlusSquare} from 'react-icons/fa';
import {FaRegMinusSquare} from 'react-icons/fa';
import {Link} from "react-router-dom";

const QuantityPopup = ({onQuantityChanged}) => {

    const [quantity, setQuantity] = useState(0);

    return <div className="popup-container">
        <input type="number" onChange={(e) => setQuantity(e.target.valueAsNumber)}/>

        <input type="submit" onClick={() =>onQuantityChanged(quantity)} value="SUMAR"/>


    </div>;
}

const StockTable = ({stocks, deleteStock}) => {

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
                        <th className='stock-th'>Descripción</th>
                        <th className='stock-th'>Categoría</th>
                        <th className='stock-th'>Cantidad</th>
                        <th className='stock-th'/>
                        <th className='stock-th'/>
                        <th className='stock-th'/>
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

                                    <FaRegPlusSquare className="calculo-suma" onClick={() => mostrarPopupParaSumar(stock)}/>

                                    <FaRegMinusSquare className="calculo-resta"/>

                                </td>
                                <td className="category-td-link">
                                    <Link className="btn-orange-link" to="/new"
                                          state={{data: stock}}><FaEdit fixedWidth style={{color: 'blue'}}/></Link>
                                </td>

                                <td className="category-td-delete">
                                    <FaRegTrashAlt className="delete-trash" onClick={() => deleteStock(stock.id)} fixedWidth
                                                   style={{color: 'red'}}/>
                                </td>
                            </tr>
                        )}
                </div>
            </section>
        </div>
    );
}


export default StockTable;