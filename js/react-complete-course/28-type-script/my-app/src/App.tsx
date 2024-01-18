import { useCallback, useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from "./types/Todo";

function App() {
  const [todos, setTodos] = useState(new Array<Todo>());

  const addTodoHandler = (text: string) => setTodos((prev) => [...prev, new Todo(text)]);
  
  function removeTodo(id: string){
    setTodos(prev => {
      const index : number = prev.findIndex(x => x.id === id);
      return prev.slice(index);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <Todos items={todos} onRemove={removeTodo}/>
    </div>
  );
}

export default App;
