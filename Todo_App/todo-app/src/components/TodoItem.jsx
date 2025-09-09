import React from "react";

export default function TodoItem({ todo, onToggle, onDelete, onStartEdit }) {
  return (
    <div className="card todo-item" onDoubleClick={onToggle} onMouseEnter={() => { /* example */ }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <input type="checkbox" checked={todo.done} onChange={onToggle} aria-label={`Mark ${todo.title} done`} />
      </div>

      <div style={{ flex: 1 }}>
        <div className={`todo-title ${todo.done ? "done" : ""}`}>{todo.title}</div>
        {todo.desc && <div className="todo-desc">{todo.desc}</div>}
        <div className="meta">
          <div className="tag">ID:{String(todo.id).slice(-4)}</div>
          <div className="muted">{todo.done ? "Completed" : "Open"}</div>
        </div>
      </div>

      <div className="actions">
        <button className="icon-btn" title="Edit" onClick={onStartEdit}>✏️</button>
        <button className="icon-btn" title="Delete" onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
}
