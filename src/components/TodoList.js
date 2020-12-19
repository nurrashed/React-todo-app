import React from 'react';
import Todo from './Todo';


export default function TodoList({todos, setTodos, filteredTodos}){
    console.log(filteredTodos);
    const myTodo = filteredTodos.map(todo => (
        <Todo 
            text={todo.text} 
            key={todo.id} 
            todos={todos} 
            setTodos={setTodos}
            todo={todo}
        />
        
    ));
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {myTodo}
            </ul>
            
        </div>  
    );
};