import React from "react";
import {Todo} from "../Todo/Todo";
import './User.scss';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

type Props = {
    todos: Todo[],
}

export const TodoList: React.FC<Props> = ({todos}) => (
    <ol className="todoList">
        {todos.map(todo => (
            <li key={todo.id} className="todoList__item">
                <Todo {...todo}/>
            </li>
        ))}
    </ol>
);
