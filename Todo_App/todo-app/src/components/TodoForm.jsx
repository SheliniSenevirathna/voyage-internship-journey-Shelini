import React, { useEffect, useRef, useState } from "react";

export default function TodoForm({ onAdd, editing, onCancelEdit, onSaveEdit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // When editing changes, populate form
  useEffect(() => {
    if (editing) {
      setTitle(editing.title || "");
      setDesc(editing.desc || "");
      setError("");
      inputRef.current?.focus();
    } else {
      setTitle("");
      setDesc("");
      setError("");
    }
  }, [editing]);

  function validate(t) {
    if (!t || !t.trim()) return "Please enter a title.";
    if (t.trim().length < 3) return "Title must be at least 3 characters.";
    if (t.trim().length > 80) return "Title must be at most 80 characters.";
    return "";
  }

  function handleSubmit(e) {
    e?.preventDefault();
    const v = validate(title);
    if (v) {
      setError(v);
      return;
    }

    if (editing) {
      onSaveEdit(editing.id, { title: title.trim(), desc });
    } else {
      onAdd({ title: title.trim(), desc });
    }

    setTitle("");
    setDesc("");
    setError("");
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      if (editing) onCancelEdit();
      setTitle("");
      setDesc("");
      setError("");
    }
    // Example: Enter submits from the input (note: in textarea Enter won't submit)
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
  }

  return (
    <div className="card todo-form">
      <h2>{editing ? "Edit Todo" : "Add Todo"}</h2>

      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <label className="muted">Title</label>
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError(validate(e.target.value));
          }}
          onFocus={() => console.log("Title focused")}       /* example event */
          onBlur={() => console.log("Title blurred")}         /* example event */
          placeholder="e.g. Build a weather widget"
        />
        <div className="muted small">{title.length}/80</div>

        <label className="muted">Description</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Optional details" />

        {error && <div className="error">{error}</div>}

        <div className="row">
          <button className="btn" type="submit" disabled={!!validate(title)}>
            {editing ? "Save" : "Add Todo"}
          </button>

          {editing ? (
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                onCancelEdit();
                setTitle("");
                setDesc("");
                setError("");
              }}
            >
              Cancel
            </button>
          ) : (
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setTitle("");
                setDesc("");
                setError("");
                inputRef.current?.focus();
              }}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
