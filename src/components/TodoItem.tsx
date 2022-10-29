import React from 'react';

import {Todo} from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties,
}

export const TodoItem = ({id, title, completed, style = {}}: TodoItemProps) => {
    return (
        <li style={style}>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
};
