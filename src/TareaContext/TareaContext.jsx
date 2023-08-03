import React from "react";
import { useLocalStorage } from "./useLocalStore";


const ContextoTarea = React.createContext();

function TareaProvider({children}) {

  const {item : tareas, 
    guardaritem : guardartareas,
  cargando,
error} = useLocalStorage('Tareas_v1', []);
  const [busquedaValue, setbusquedaValue] = React.useState('');
  const [OpenModal, setOpenModal] = React.useState(false);

  
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

    const addTodo = (text) => {
      const Estado = [...tareas];
      Estado.push({
        text,
        completed: false,
      });
      guardartareas(Estado);
    };
  

    const tareasEliminadas = (text) => {
      const nuevastareas = [...tareas];
      const tareaIndex = nuevastareas.findIndex(
        (todo) => todo.text == text
      );
      nuevastareas.splice(tareaIndex, 1);
      guardartareas(nuevastareas);
    };

    return(
<ContextoTarea.Provider value={{
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
    setOpenModal,
    addTodo
}}>
{children}
  
</ContextoTarea.Provider>

    );
}

export {ContextoTarea, TareaProvider};




