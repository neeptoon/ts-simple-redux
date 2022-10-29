import {useState, useEffect} from 'react';

import {Todo} from './types';
import NewTodoForm from './components/NewTodoForm';
import {TodoList} from './components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: new Date().toString(),
            title: text,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data: Todo[]) => {
                setTodos(data);
            });
    }, []);

    return (
        <div className="App">
            <NewTodoForm
                handleClick={addTodo}
            />
            <TodoList list={todos}/>
        </div>
    );
}

export default App;
