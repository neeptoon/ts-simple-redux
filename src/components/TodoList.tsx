import {Todo} from '../types';

import {TodoItem} from './TodoItem';

interface TodoListProps {
    list: Todo[],
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void
}

export const TodoList = ({list, toggleTodo, removeTodo}: TodoListProps) => {
    return (
        <ul>
            {list.map(item => <TodoItem
                key={item.id}
                {...item}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />)}
        </ul>
    );
};

