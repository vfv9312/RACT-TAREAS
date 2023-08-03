import { Appdatos } from './Appdatos';
import './Global.css'
import React from 'react';
import {ContextoTarea, TareaProvider} from "../TareaContext/TareaContext"

function App() {




  return (
   <React.Fragment>{/*<div className="App">*/}
   <TareaProvider> <Appdatos></Appdatos></TareaProvider>
  
     </React.Fragment>  
  );
}





export default App;
