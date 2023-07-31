import './TodoList.css';
function TodoList(props) {
    return(
        <ul className='List'>
            {props.children}
        </ul>
    );
    
}

export {TodoList};
