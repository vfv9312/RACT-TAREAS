import './Boton.css'
import {ContextoTarea} from "../TareaContext/TareaContext.jsx"
function CreateBoton({setOpenModal, onOpenModal}) {


      

      
    
    return(

        <div>
        <button className="Agregar" onClick={(event)=> { 
         
                setOpenModal(!onOpenModal);
    }
    }>+</button>
        </div>

    );
    
}

export {CreateBoton};