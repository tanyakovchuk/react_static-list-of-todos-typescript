import React from "react";
import './App.css';

import todos from './api/todos';
import users from './api/users';
import {TodoList} from "./TodoList/TodoList";

const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
}));

const App: React.FC = () => (
    <div className="App">
        <h1>Static list of todos</h1>
        <p>
            <span>Todos: </span>
            {todos.length}
        </p>
        <p>
            <span>Users: </span>
            {users.length}
        </p>
        <TodoList todos={preparedTodos} />
    </div>
);

export default App;
