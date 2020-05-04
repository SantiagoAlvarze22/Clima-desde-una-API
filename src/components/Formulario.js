import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

    //setErrot para validar los campos 
    const [error, setError] = useState(false)

    //Extraer ciudad y pais
    const { ciudad, pais } = busqueda

    //funcion que coloca los elmentos en el state 
    const handleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    //Cuando el usuario da submit al form 

    const handleSubmit = e => {
        e.preventDefault()

        //Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        //para pasarlo al componente
        setError(false)

        //pasarlo al componente principal
        setConsultar(true)
    }

    return (
        <form
            onSubmit={e => handleSubmit(e)}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={e => handleChange(e)}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={e => handleChange(e)}
                >
                    <option value="">--Selecciones un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}


Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}

export default Formulario;