import React from 'react';

const ToDos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="card py-3" key = {todo.id}>
                    <span className="mx-3" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div className="card">
            <p className="text-center">You have no todo's left</p>
        </div>
    )
    return (
        <div className="todo container px-5 mb-4">
            {todoList}
        </div>
    );
}

export default ToDos;