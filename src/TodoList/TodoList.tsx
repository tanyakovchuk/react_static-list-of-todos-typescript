import React from "react";
import {Todo} from "../Todo/Todo";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
type Props = {
    todos: Todo[],
}

export const TodoList: React.FC<Props> = ({todos}) => (
    <div>
        {console.log(todos)}
        {todos.map(todo => (
            <div key={todo.id}>
                <Todo {...todo}/>
            </div>
        ))}
    </div>
);
