import './TodoTitulo.css';

function TodoTitulo({total, Contador, sinpendientes}) {
 {/* const estilos ={
    backgroundColor :'red',
    fontSize : '24px',
    textAlign: 'center',
    margin: '0',
  padding: '48px'} 
y tengo que unsar style={estilos} en donde agregue los estilos*/}
    return(
      <div>
      <h1>👋🏽 Hola!! Vladimir</h1>
      {!sinpendientes ? (
        <h3>Has completado {Contador} de {total}</h3>
      ) : total == 0 ? (<h3>No hay pendientes 📄</h3>) : (<h3>Listo terminaste con todos los pendientes🥳</h3>) }
    </div>
    );
  }

  export {TodoTitulo};