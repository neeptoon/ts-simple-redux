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

    const toggleTodo = (id: Todo['id']) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
        
    };

    const removeTodo = (id: Todo['id']): void => {
        setTodos(todos.filter(todo => todo.id !== id));

    };

    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(res => res.json())
    //         .then((data: Todo[]) => {
    //             setTodos(data);
    //         });
    // }, []);

    return (
        <div className="App">
            <NewTodoForm
                handleClick={addTodo}
            />
            <TodoList list={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    );
}

export default App;
