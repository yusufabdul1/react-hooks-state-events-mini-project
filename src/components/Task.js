import React from "react";

function Task({ text, category, handleDelete }) {
  function onClickDelete() {
    handleDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default Task;