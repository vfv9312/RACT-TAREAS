import React from 'react';
import './Busqueda.css'


function TodoBusqueda(props) {

 

    return(
        <input className="Busqueda" placeholder="Cortar cebolla"
        value = {props.busquedaValue}
        onChange={(evento) => { 
            props.setbusquedaValue(evento.target.value);
        }}></input>
    );
    
}

export {TodoBusqueda};