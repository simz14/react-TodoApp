import { useState } from "react";
import AddButton from "./UI/Button";

const AddTask = ({ addTaskFn, filterFn }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <AddButton
        onClick={() => {
          addTaskFn(value);
        }}
      >
        Add
      </AddButton>
    </div>
  );
};

export default AddTask;
