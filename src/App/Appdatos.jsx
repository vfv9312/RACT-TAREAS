import { TodoTitulo } from '../titulo/TodoTitulo';
import { TodoBusqueda } from '../buscador/TodoBusqueda';
import {TodoList} from '../lista/TodoList';
import { TodoItem } from '../Item/TodoItem';
import { CreateBoton } from '../Boton/Boton';
import {Modal} from "../Modal/Modal"
import {Cargando} from "../Animaciones/cargando"
import {NuevaTarea} from '../Animaciones/AnimacionCrarNuevaList/NuevaTarea'
import {ContextoTarea} from "../TareaContext/TareaContext"
import React from 'react';

function Appdatos() {


    return (
        <React.Fragment>{/*<div className="App">*/}

<ContextoTarea.Consumer>
        {({
     tareasCompletador,
     todasLasTareas,
     todaslastareaslistas,
     busquedaValue,
     setbusquedaValue,
     cargando,
     error,
     Busquedatareas,
     tareasListas,
     tareasEliminadas,
     OpenModal,
     setOpenModal
        }) => (
        <>
        <TodoTitulo Contador={tareasCompletador} total={todasLasTareas} sinpendientes = {todaslastareaslistas} ></TodoTitulo>
        <TodoBusqueda busquedaValue={busquedaValue}
        setbusquedaValue={setbusquedaValue}></TodoBusqueda>
 
        <TodoList >
        {cargando && <Cargando></Cargando>}
     {error && <p>Error</p>}
     {!cargando && Busquedatareas.length == 0 && <NuevaTarea/>}

        {Busquedatareas.map(todo => (
        <TodoItem 
        key = {todo.text} text = {todo.text} completed = {todo.completed}
        cuandotecompletes = {() => tareasListas(todo.text)}
        eliminandoitem = {() => tareasEliminadas(todo.text)}
        ></TodoItem>))}
       {/**  {defaultTodos.map(todo => (<TodoItem key = {todo.text} text = {todo.text} completed = {todo.completed}></TodoItem>))}*/}
        </TodoList >
        
       <CreateBoton setOpenModal={setOpenModal}
       onOpenModal = {OpenModal}/> 
      
       {/* Haci se crean los comentarios en JSX */}

     {OpenModal &&  (<Modal >
        
       </Modal>)}
       </>)}</ContextoTarea.Consumer>
          </React.Fragment>  
       );
     
}

export {Appdatos};

