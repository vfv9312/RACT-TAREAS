import "./Modal.css"
import React from "react";
import  ReactDOM  from "react-dom";

function Modal() {
    return ReactDOM.createPortal(
        <div className="Modal">
        <div className="login-box">
 
 <form>
   <div className="user-box">
     <input type="text" name="" required=""/>
     <label>Tarea</label>
   </div>
<center>
   <a href="#">
          Guardar
      <span></span>
   </a></center>
 </form>
</div>
        </div>,
        document.getElementById('modal')
    );
}
export {Modal};