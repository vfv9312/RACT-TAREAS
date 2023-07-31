import './TodoItem.css'
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';


function TodoItem(props) {
    return(
    
      <li className="Item">
        <BsFillClipboardCheckFill className={`Icon Icon-Check ${props.completed && 'Icon-Check-active'}`}
        onClick={props.cuandotecompletes}/> 
        <p className={`Porcompletar ${props.completed && 'Completado'}`}>{props.text}</p>
        <AiFillCloseCircle className="Icon Icon-Eliminado"
        onClick={props.eliminandoitem}/>
      </li>
      
      
    );
   
  }
  export {TodoItem};