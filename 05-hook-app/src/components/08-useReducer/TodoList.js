import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <div>
            
            <ui className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <TodoListItem key={todo.id} todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle} />
                            ))
                        }
                    </ui>
            
        </div>
    );
};
