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
            .then(() => navigate("/"))
    }


    return (
        <div className="new">
            <h1>{data ? 'Modificar Artículo' : 'Agregar Nuevo Artículo'}</h1>
            <form className="add-form" onSubmit={enviarDatos} action="">
                <div className="content-form">
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="">Código</label>
                            <input type="text"
                                   className="new-input"
                                   value={datos.codigo}
                                   onChange={handleInputChange}
                                   id="codigo"
                                   name="codigo"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <input type="text"
                                   className="new-input"
                                   value={datos.descripcion}
                                   onChange={handleInputChange}
                                   id="descripcion"
                                   name="descripcion"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Categoría</label>
                            <input type="text"
                                   className="new-input"
                                   value={datos.category}
                                   onChange={handleInputChange}
                                   id="category"
                                   name="category"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Cantidad</label>
                            <input type="text"
                                   className="new-input"
                                   value={datos.cantidad}
                                   onChange={handleInputChange}
                                   id="cantidad"
                                   name="cantidad"/>
                        </div>
                        <div className="btn-edit-container">
                            <button type="submit" className="new-button">Guardar</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

