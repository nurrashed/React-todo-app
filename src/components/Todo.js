import React from 'react';

export default function Todo({text, todo, todos, setTodos}){

    //Event
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completehandler = () => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed 
                }
            }
            return item;
        }));
    };

    /* const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    } */

    return(
        <>
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completehandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            {/* <button  className='edit-btn'>
                <i className='fas fa-edit'></i>
            </button> */}
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>

        {/* <form>
            <input onChange={inputTextHandler} value={todo.text} type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form> */}

        
        </>
        
    );
};