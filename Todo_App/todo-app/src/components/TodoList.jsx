import React from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, filter, setFilter, onToggle, onDelete, onStartEdit }) {
  const filtered = todos.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><strong>{todos.length}</strong> total • <span className="muted">{filtered.length} shown</span></div>
          <div className="filters">
            <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
            <button className={`filter-btn ${filter === "active" ? "active" : ""}`} onClick={() => setFilter("active")}>Active</button>
            <button className={`filter-btn ${filter === "done" ? "active" : ""}`} onClick={() => setFilter("done")}>Done</button>
          </div>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="card muted">No todos — add one!</div>
        ) : (
          filtered.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={() => onToggle(t.id)} onDelete={() => onDelete(t.id)} onStartEdit={() => onStartEdit(t)} />
          ))
        )}
      </div>
    </div>
  );
}
