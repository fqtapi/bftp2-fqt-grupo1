import React, {useState} from 'react';
import "./New.css"
import {useLocation} from "react-router-dom";


function New(props) {

    const [datos, setDatos] = useState(props.stocks || {
        category: '',
        codigo: '',
        descripcion: '',
        cantidad: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDatos('');
    }

    return (
        <div className="new">
            <h1>EDITAR ARTÍCULO</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="content-form">
                    <div className="form-group">
                        <label className="new-label" for="category">Categoría
                            <input className="new-input"
                                value={datos.category}
                                id="category"
                                type="text"
                                name="category"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="new-label" for="codigo">Código
                            <input className="new-input"
                                value={datos.codigo}
                                id="codigo"
                                type="text"
                                name="codigo"
                                onChange={handleInputChange}
                            />

                        </label>
                    </div>
                    <div className="form-group">
                        <label className="new-label" for="descripcion">Descripción
                            <input className="new-input"
                                value={datos.descripcion}
                                id="descripcion"
                                type="text"
                                name="descripcion"
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">

                        <label className="new-label" for="cantidad">Cantidad
                            <input className="new-input"
                                value={datos.cantidad}
                                id="cantidad"
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