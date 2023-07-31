import React from 'react';

function useLocalStorage(itemName, initialValue) {


    let Localstore = localStorage.getItem(itemName);
    let parseitem ; 
    if(!Localstore) { 
    localStorage.setItem(itemName, JSON.stringify(initialValue));
     parseitem = [];}
     else{ parseitem= JSON.parse(Localstore);}
  
     const [item, setitem] = React.useState(parseitem);
  
     const guardaritem = (newitem) => {
      localStorage.setItem(itemName, JSON.stringify(newitem));
      setitem(newitem);
     }
  
     return [item, guardaritem];
  }

  export {useLocalStorage};