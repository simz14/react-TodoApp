import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import AddTask from "./components/AddTask";
import SelectTasks from "./components/SelectTasks";
import Task from "./components/Task";

const AppWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  display: grid;
  justify-content: center;
`;

const App = () => {
  const [data, setData] = useState([
    { title: "Task 1", done: false, category: "Clean" },
    { title: "Task 2", done: false, category: "Shop" },
    { title: "Task 3", done: false, category: "Fix" },
    { title: "Task 4", done: false, category: "Shop" },
    { title: "Task 5", done: false, category: "Clean" },
    { title: "Task 6", done: false, category: "Fix" },
    { title: "Task 7", done: false, category: "Shop" },
    { title: "Task 8", done: false, category: "Clean" },
  ]);

  const [selected, setSelected] = useState("All");

  const addTaskHandler = (value) => {
    setData((prev) => [
      { title: value, done: false, category: "Fix" },
      ...prev,
    ]);
  };

  const deleteTaskHandler = (title) => {
    setData((prev) => prev.filter((task) => task.title !== title));
  };

  const taskDoneHandler = (title) => {
    setData((prev) =>
      prev.map((task) => {
        if (task.title === title) {
          task.done = true;
        }
        return task;
      })
    );
  };

  const selectTasks = (category) => {
    setSelected(category);
  };

  return (
    <AppWrapper>
      <h1>ToDo list📝</h1>
      <div>
        <AddTask addTaskFn={addTaskHandler} />
        <SelectTasks selectFn={selectTasks} />

        {data.map((task) => {
          if (
            (!task.done && task.category === selected) ||
            selected === "All"
          ) {
            return (
              <Task
                key={task.title}
                task={task}
                deleteFn={deleteTaskHandler}
                doneFn={taskDoneHandler}
              />
            );
          }
        })}
      </div>

      <h1>Done✔️</h1>
      <div>
        {data.map((task) => {
          if (task.done && (task.category === selected || selected === "All")) {
            return (
              <Task
                key={task.title}
                task={task}
                deleteFn={deleteTaskHandler}
                doneFn={taskDoneHandler}
              />
            );
          }
        })}
      </div>
    </AppWrapper>
  );
};

export default App;
