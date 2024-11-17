import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  //Function to handle task deletion
  function handleDelete(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete));
  }
  const filterTasks = tasks.filter((task) =>
    selectedCategory === "All" ? task : task.category === selectedCategory
  );
  function onTaskFormSubmit(newTask) {
    setTasks((prevTask) => [...prevTask, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filterTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;