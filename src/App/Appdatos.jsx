import { TodoTitulo } from '../titulo/TodoTitulo';
import { TodoBusqueda } from '../buscador/TodoBusqueda';
import {TodoList} from '../lista/TodoList';
import { TodoItem } from '../Item/TodoItem';
import { CreateBoton } from '../Boton/Boton';
import { useLocalStorage } from "./useLocalStore";
import React from 'react';

function Appdatos() {

    //  const defaultTodos = [
//   {text: 'Ver Barbie con Yuri', completed: true},
//   {text:'Ver openhaimer con Yuri', completed:false},
//   {text:'Comer tacos rosa con Yuri', completed:false},
//   {text:'Hacer ejercicio con Yuri', completed:false},
//   {text:'Conseguir ropa rosa', completed: true}]; //liberar array
//localStorage.setItem("Tareas_v1", defaultTodos)
//localStorage.removeItem("Tareas_v1")
//const stringifytareas = JSON.stringify(defaultTodos); convierte en string el arreglo por que localstore solo lee esto
// const parsetareas = JSON.parse(stringifytareas); convierte el texto denuevo en coidgo js para porder usarlo





  const [tareas, guardartareas] = useLocalStorage('Tareas_v1', []);
  const [busquedaValue, setbusquedaValue] = React.useState('');

  
    const tareasCompletador = tareas.filter( filtrando => !!filtrando.completed).length;
    const todasLasTareas = tareas.length;
    const Busquedatareas = tareas.filter(
      (filtrando) => { return filtrando.text.toLocaleLowerCase().includes(busquedaValue.toLocaleLowerCase())})

      const todaslastareaslistas = tareasCompletador === todasLasTareas ? true : false;
      console.log(todaslastareaslistas);


    const tareasListas = (text) => {
      const nuevastareas = [...tareas];
      const tareaIndex = nuevastareas.findIndex(
        (todo) => todo.text == text
      );
      nuevastareas[tareaIndex].completed = true;
      guardartareas(nuevastareas);
    };

    const tareasEliminadas = (text) => {
      const nuevastareas = [...tareas];
      const tareaIndex = nuevastareas.findIndex(
        (todo) => todo.text == text
      );
      nuevastareas.splice(tareaIndex, 1);
      guardartareas(nuevastareas);
    };
  

    return (
        <React.Fragment>{/*<div className="App">*/}
        
           <TodoTitulo Contador={tareasCompletador} total={todasLasTareas} sinpendientes = {todaslastareaslistas} ></TodoTitulo>
           <TodoBusqueda busquedaValue={busquedaValue}
           setbusquedaValue={setbusquedaValue}></TodoBusqueda>
           <TodoList >
           {Busquedatareas.map(todo => (
           <TodoItem 
           key = {todo.text} text = {todo.text} completed = {todo.completed}
           cuandotecompletes = {() => tareasListas(todo.text)}
           eliminandoitem = {() => tareasEliminadas(todo.text)}
           ></TodoItem>))}
          {/**  {defaultTodos.map(todo => (<TodoItem key = {todo.text} text = {todo.text} completed = {todo.completed}></TodoItem>))}*/}
           </TodoList >
          <CreateBoton/> 
          {/* Haci se crean los comentarios en JSX */}
           
          </React.Fragment>  
       );
     
}

export {Appdatos};