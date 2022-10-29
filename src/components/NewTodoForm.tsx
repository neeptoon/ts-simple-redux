import React from 'react';

interface NewTodoFormProps {
    handleClick: (text: string) => void,
}

type FormFields = {
    newTodo: HTMLInputElement
}

const NewTodoForm = ({handleClick}: NewTodoFormProps) => {

    const onSubmit = (evt: React.FormEvent<HTMLFormElement & FormFields>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const {newTodo} = form;
        handleClick(newTodo.value);
        newTodo.value = '';
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="new todo"
                name="newTodo"
            />
            <button>Add todo</button>
        </form>
    );
};

export default NewTodoForm;
