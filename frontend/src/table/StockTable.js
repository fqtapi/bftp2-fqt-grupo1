import React from "react";
import "./Table.css";
import {FaEdit} from 'react-icons/fa';
import {Link} from "react-router-dom";

const StockTable = ({stocks, stockEdit}) => {


    return (


        <div className="table-container">
            <h1 className="categoryList-title">Lista</h1>

            <section className='categoryList'>
                <div className='table-list'>
                    <table className="category-table">
                        <tr className='category-table-title'>
                            <th className='stock-th'>Código</th>
                            <th className='stock-th'>Descripcion</th>
                            <th className='stock-th'>Category</th>
                            <th className='stock-th'>Cantidad</th>
                            <th className='stock-th'>Añadir/Eliminar</th>
                        </tr>

                        {stocks.map(stock =>
                            <tr className='category-table-row' key={stock.id}>
                                <td className="category-td">{stock.codigo}</td>
                                <td className="category-td">{stock.descripcion}</td>
                                <td className="category-td">{stock.category}</td>
                                <td className="category-td">{stock.cantidad}</td>
                                <td className="category-td-link">
                                    <Link className="btn-orange-link" to="/new"
                                          state={{data: stockEdit}}><FaEdit fixedWidth style={{color: 'red'}}/></Link>

                                </td>
                            </tr>
                        )}
                    </table>
                </div>
            </section>
        </div>
    );
}


export default StockTable;