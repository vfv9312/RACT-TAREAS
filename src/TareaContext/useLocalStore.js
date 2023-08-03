import react from 'react';
import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setitem] = React.useState(initialValue);
    const [cargando, setcargando] = React.useState(true);
    const [error, seterror] = React.useState(false);
    let parseitem ; 

    React.useEffect(() => {
        setTimeout(() => { 
             try {

            let Localstore = localStorage.getItem(itemName);
            if(!Localstore) { 
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                 parseitem = [];}
                 else{ parseitem= JSON.parse(Localstore);
                setitem(parseitem);}
                 setcargando(false);
            
        } catch (error) {
            setcargando(false);
            seterror(true);
            
        }
    },5000);
    },[]);


  
    
  
     const guardaritem = (newitem) => {
      localStorage.setItem(itemName, JSON.stringify(newitem));
      setitem(newitem);
     }
  
     return {item,
         guardaritem,
         cargando,
         error
    };
  }

  export {useLocalStorage};

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
