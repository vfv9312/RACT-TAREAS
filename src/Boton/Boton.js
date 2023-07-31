import './Boton.css'
function CreateBoton(params) {
    return(
        <div>
        <button className="Agregar" onClick={(event)=> {console.log("Le diste click")
        console.log(event.target)}
    }>+</button>
        </div>
    );
    
}

export {CreateBoton};