import React, {useState} from 'react';
import "./New.css"
import {useLocation, useNavigate} from "react-router-dom";


export const New = (props) => {

    let navigate = useNavigate();

    const location = useLocation();
    const data = location.state ? location.state.data : null;

    const [datos, setDatos] = useState(data || {
        codigo: '',
        descripcion: '',
        category: '',
        cantidad: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.addStock(datos)
            .then(() => navigate("http://localhost:8081/stocks?category=${category}"))
    }


    return (
        <div className='section-form-stock'>
            <section className="stock-form-section">
                <div className="stock-form-wrapper">

                    <h1>{data ? 'Modificar Artículo' : 'Agregar Nuevo Artículo'}</h1>
                    <div className="stock-form-container">
                        <form className="edit-stock-form" onSubmit={enviarDatos} action="">

                            <div className="stock-form-group">
                                <label htmlFor="">Código</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.codigo}
                                       onChange={handleInputChange}
                                       id="codigo"
                                       name="codigo"/>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Descripción</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.descripcion}
                                       onChange={handleInputChange}
                                       id="descripcion"
                                       name="descripcion"/>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Categoría</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.category}
                                       onChange={handleInputChange}
                                       id="category"
                                       name="category"/>
                            </div>

                            <div className="stock-form-group">
                                <label htmlFor="">Cantidad</label>
                                <input type="text"
                                       className="stock-form-control"
                                       value={datos.cantidad}
                                       onChange={handleInputChange}
                                       id="cantidad"
                                       name="cantidad"/>
                            </div>

                            <div className="btn-edit-container">
                                <button type="submit" className="css-button-rounded--red">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
}

