import React from 'react';
import swal from 'sweetalert';

export default function Form({todos, setTodos, inputText, setInputText, setStatus}){

  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) =>{
    e.preventDefault(); // Stop reloading the page after enter
    if(inputText !== ''){
      setTodos([
        ...todos, {text:inputText, completed:false, id:Math.random()*10000, edited:false}
      ]);
      setInputText('');      
    } 
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const handleRemoveAll = () =>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to retrive anything!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setTodos([]);
        swal("Poof! Your todo list has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your todo list is safe!");
      }
    }); 
  };

  return(
    <>
    <form>
      <input value={inputText} onChange = {inputTextHandler} type="text" className="todo-input" placeholder='Enter a Todo'/>
      <button onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option className="optionText" value="all">All</option>
          <option className="optionText" value="completed">Completed</option>
          <option className="optionText" value="uncompleted">Uncompleted</option>
        </select>        
      </div>      
      <div>
          <button className='delete-btn' type='button' onClick={handleRemoveAll}>Delete all</button>
      </div>
    </form>
    </>
  );  
};