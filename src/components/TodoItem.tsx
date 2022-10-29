import React from 'react';

import {Todo} from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties,
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void
}

export const TodoItem = ({id, title, completed, toggleTodo, removeTodo, style = {}}: TodoItemProps) => {

    const handleChange = () => {
        toggleTodo(id);
    };

    const handleClick = () => {
        removeTodo(id);
    };

    return (
        <li style={style}>
            <input type="checkbox" checked={completed} onChange={handleChange}/>
            <span>{title}</span>
            <span onClick={handleClick}>&times;</span>
        </li>
    );
};
