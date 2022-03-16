import React from "react";
import "./Table.css";
import {FaEdit} from 'react-icons/fa';
import {Link} from "react-router-dom";

const StockTable = ({stocks}) => {


    return (


        <div className="table-container">

            <h1 className="categoryList-title">Stock</h1>


            <section className='categoryList'>
                <div className='table-list'>
                    <table className="category-table">
                        <tr className='category-table-title'>
                            <th className='stock-th'>Código</th>
                            <th className='stock-th'>Descripcion</th>
                            <th className='stock-th'>Category</th>
                            <th className='stock-th'>Cantidad</th>
                            <th className='stock-th'>Modificar</th>
                        </tr>

                        {stocks.map(stock =>
                            <tr className='category-table-row' key={stock.id} stock={stock}>
                                <td className="category-td">{stock.codigo}</td>
                                <td className="category-td">{stock.descripcion}</td>
                                <td className="category-td">{stock.category}</td>
                                <td className="category-td" style={stock.cantidad === 0 ? {fontSize: 25, color: "red"} : {}}>{stock.cantidad}</td>
                                <td className="category-td-link">
                                    <Link className="btn-orange-link" to="/new"
                                          state={{data: stock}}><FaEdit fixedWidth style={{color: 'red'}}/></Link>
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