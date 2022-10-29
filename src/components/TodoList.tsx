import React from 'react';

import {Todo} from '../types';

import {TodoItem} from './TodoItem';




interface TodoListProps {
    list: Todo[]
}

export const TodoList = ({list}: TodoListProps) => {
    return (
        <ul>
            {list.map(item => <TodoItem key={item.id} {...item}/>)}
        </ul>
    );
};

