import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  const [data, setData] = useState([
    { title: "Task 1", done: false },
    { title: "Task 2", done: false },
    { title: "Task 3", done: false },
    { title: "Task 4", done: false },
    { title: "Task 5", done: false },
  ]);

  return (
    <div>
      <h1>ToDo list</h1>

      <div>
        {AddTask()}
        {data.map((task) => (
          <div key={task.title}>{task.title}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
