import React, {useState, useEffect} from 'react';
import './App.css';
import DateTime from './components/DateTime';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

/* import swal from 'sweetalert'; */



function App() {

  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  

  //Run once when the app start
  useEffect(()=>{
    getLocalTodos();
  }, []);
  //Use effect
  useEffect(()=>{

    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[todos, status]);

  //save to local
  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos));    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
  };

  /* const handleRemoveAll = () =>{
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
  }; */

  return (
    <div className="App">
      <header>
        <h2>Rashed's Todo List</h2>        
      </header> 
      <div className='dateTime' >
        <DateTime />
      </div>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}        
      />
      {/* <div>
        <button className='delete-btn' type='button' onClick={handleRemoveAll}>Delete all</button>
      </div> */}
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
