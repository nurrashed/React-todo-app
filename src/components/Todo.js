import React, {useState} from "react";

export default function Todo({ text, todo, todos, setTodos }) {

    const [editText, setEditText] = useState('');

  //Event
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completehandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            edited: !item.edited,
          };
        }
        return item;
      })
    );

    setEditText(todo.text);
  };

  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    //setEditText(e.target.value);
    setEditText(...todo.text, e.target.value);
  }

  const submitTodoHandler = (e) =>{
    e.preventDefault(); // Stop reloading the page after enter
    /* if(todo.text !== ''){
      setTodos([
        ...todos, {text:todo.text, completed:false, id:Math.random()*10000, edited:false}
      ]);
      setEditText('');      
    }  */

    console.log('EEEEEEE:',e);
  }

  
  let editHTMl = <div></div>;

  if (todo.edited) {
    editHTMl = (
      <form>
        <input
          onChange={inputTextHandler} value={todo.text}
          type="text"
          className="todo-input"
        />
        <button onClick = {submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    );
  } else {
    editHTMl = (
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
    );
  }

  return (
    <div>
        <div className="todo">
            {/*  <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li> */}
            {editHTMl}
            <button onClick={completehandler} className="complete-btn">
            <i className="fas fa-check"></i>
            </button>
            <button className="edit-btn" onClick={editHandle}>
            <i className="fas fa-edit"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>
        </div>
        

        {/* <div className="todo">        
            {editHTMl}            
            <button className="edit-btn" onClick={editHandle}>
                <i className="fas fa-edit"></i>
            </button>
        </div> */}
    </div>
  );
}
