import React from "react";

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
        <div>
            {title}
        </div>
        <div>
            Completed:
            {' '}
            {completed ? 'yes' : 'no'}
        </div>
        <div>
            {user.name}
        </div>
    </>
);