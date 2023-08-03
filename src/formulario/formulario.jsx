import React from "react";
import { Modal } from "../Modal/Modal";
import "./Formulario.css"
import { ContextoTarea } from "../TareaContext/TareaContext";

function Formulario() {
    const {addTodo,
        setOpenModal
    } = React.useContext(ContextoTarea);
    const [Estado, setEstado] = React.useState('');

    const reglasformulario= (evento) => {
        evento.preventDefault();
        addTodo(Estado);
        setOpenModal(false);
        }

        const cancelar = () => {
            setOpenModal(false);
            }
            const onChange = (event) => {
                setEstado(event.target.value);
              };
return (
<div className="Modal">
<div className="login-box">

<form onSubmit={reglasformulario}>
<div className="user-box">
<input type="text"  placeholder="Ver batman"
        value={Estado}
        onChange={onChange}/>
<label>Tarea</label>
</div>
<center>
<button
type="button"
onClick={cancelar}>
Cancelar
</button>
<button>
Guardar
</button></center>
</form>
</div>
</div>
);
}

export {Formulario};