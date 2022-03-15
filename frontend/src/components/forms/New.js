import React from 'react';
import "./New.css"


function New() {


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

                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Código
                            <input
                                type="text"
                                name="codigo"

                            />

                        </label>
                    </div>
                    <div className="form-group">
                        <label>Descripción
                            <input
                                type="text"
                                name="descripcion"

                            />
                        </label>
                    </div>
                    <div className="form-group">

                        <label>Cantidad
                            <input
                                type="text"
                                name="cantidad"

                            />
                        </label>
                    </div>
                    <button className="new-button">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default New;