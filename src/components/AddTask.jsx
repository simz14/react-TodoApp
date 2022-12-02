import { useState } from "react";

const AddTask = ({ addTaskFn }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <button onClick={() => addTaskFn(value)}>Add</button>
    </div>
  );
};

export default AddTask;
