import { useState, useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, done: false }
        ]);
    };

    const deleteTodo = useCallback((id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

    const toggleTodo = useCallback((id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        );
    }, [todos]);

    return (
        <>
            <TodoInput onAdd={addTodo} />
            <TodoList
                todos={todos}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
            />
        </>
    );
}