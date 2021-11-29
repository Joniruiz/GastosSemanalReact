import React,{Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {

    //definir el state

    const [cantidad,setCantidad]= useState(0);
    const [error,setError] =useState(false)


    //Funcion que lee el presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value,10))
    }
    
    //submit para definir el presupuesto

    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad )){
            setError(true)
            return;
        }


        //Si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }

    return (

        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
            <form
            onSubmit={agregarPresupuesto}>
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange={definirPresupuesto}/>

                <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"/>
            </form>
        </Fragment>
      );
}



Pregunta.propTypes={
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired


}
 
export default Pregunta;