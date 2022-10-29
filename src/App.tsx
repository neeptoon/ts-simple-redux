import {useState, useEffect} from 'react';

import {Todo} from './types';
import NewTodoForm from './components/NewTodoForm'
import TodoItem from './components/TodoItem'
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos]);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
  }, []);

  return (
    <div className="App">
      <NewTodoForm
        handleClick={addTodo}
      />
      <TodoItem id='112' completed={false} title="first todo" style={{ border: '1px sold white' }}/>
    </div>
  );
}

export default App;
