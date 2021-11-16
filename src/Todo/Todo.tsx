import React from "react";
import {User} from '../User/User';
import './Todo.scss'

interface User {
    name: string;
}

type Props = {
    title: string,
    completed: boolean,
    user: User[];
}

export const Todo: React.FC<Props> = ({title, completed, user}) => (
    <>
        <p className="title">{title}</p>
        <p>
            {`completed: `}
            {completed ? 'yes' : 'no'}
        </p>
        <User {...user}/>
    </>
);
