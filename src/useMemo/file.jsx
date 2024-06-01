import React from 'react'

export default function TodoList({ todos, theme, tab }) {
    // const visibleTodos = filterTodos(todos, tab);
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    return (
        <div className={theme}>
            <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
            <List items={visibleTodos} />
        </div>
    );
}