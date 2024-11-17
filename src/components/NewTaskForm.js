import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const removeAll = categories.filter((category) => category !== "All");
  const [firstInput, setFirstInput] = useState("");
  const [select, setSelect] = useState(removeAll[0]);

  function handleInput(e) {
    setFirstInput(e.target.value);
  }
  function handleSelect(e) {
    setSelect(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      text: firstInput,
      category: select,
    };
    onTaskFormSubmit(newTask);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={firstInput}
          onChange={handleInput}
        />
      </label>
      <label>
        Category
        <select name="category" value={select} onChange={handleSelect}>
          {
            /* render <option> elements for each category here */
            removeAll.map((category, index) => {
              return <option key={index}>{category}</option>;
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;