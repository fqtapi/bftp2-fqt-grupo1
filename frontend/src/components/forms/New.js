import React, {useState} from 'react';
import "./New.css"
import {useLocation} from "react-router-dom";


function New() {
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



    return (
        <div className="new">
            <h1>EDITAR ARTÍCULO</h1>
            <form className="add-form">
                <div className="content-form">
                    <div className="form-group">
                        <label>Categoría
                            <input
                                type="text"
                                name="category"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Código
                            <input
                                type="text"
                                name="codigo"
                                onChange={handleInputChange}
                            />

                        </label>
                    </div>
                    <div className="form-group">
                        <label>Descripción
                            <input
                                type="text"
                                name="descripcion"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">

                        <label>Cantidad
                            <input
                                type="text"
                                name="cantidad"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <button className="new-button" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default New;