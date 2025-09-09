import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos_v1")) || [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all"); // all | active | done
  const [editing, setEditing] = useState(null); // {id, title, desc} or null

  useEffect(() => {
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  // Handlers (passed down to children)
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo, id: Date.now(), done: false }, ...prev]);
  };

  const updateTodo = (id, updates) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    const t = todos.find((x) => x.id === id);
    if (!t) return;
    updateTodo(id, { done: !t.done });
  };

  const startEdit = (todo) => setEditing(todo);
  const cancelEdit = () => setEditing(null);
  const saveEdit = (id, updates) => {
    updateTodo(id, updates);
    setEditing(null);
  };

  return (
    <div className="app container">
      <header>
        <h1>TODO APP</h1>
        <p className="muted">useState • controlled forms • events • state lifting</p>
      </header>

      <main className="layout">
        <aside className="left">
          <TodoForm
            onAdd={addTodo}
            editing={editing}
            onCancelEdit={cancelEdit}
            onSaveEdit={saveEdit}
          />
        </aside>

        <section className="right">
          <TodoList
            todos={todos}
            filter={filter}
            setFilter={setFilter}
            onToggle={toggleDone}
            onDelete={removeTodo}
            onStartEdit={startEdit}
          />
        </section>
      </main>

      <footer className="footer">
        Tip: Try keyboard events: press <kbd>Enter</kbd> to submit, <kbd>Esc</kbd> to cancel edit.
      </footer>
    </div>
  );
}
