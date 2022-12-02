import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

const App = () => {
  const [data, setData] = useState([
    { title: "Task 1", done: false },
    { title: "Task 2", done: false },
    { title: "Task 3", done: false },
    { title: "Task 4", done: false },
    { title: "Task 5", done: false },
  ]);

  const addTaskHandler = (value) => {
    setData([{ title: value, done: false }, ...data]);
  };

  const deleteTaskHandler = (title) => {
    setData(data.filter((task) => task.title !== title));
  };

  return (
    <div>
      <h1>ToDo list</h1>
      <div>
        <AddTask addTaskFn={addTaskHandler} />

        {data.map((task) => (
          <Task key={task.title} task={task} />
        ))}
      </div>
    </div>
  );
};

export default App;
