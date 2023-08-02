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