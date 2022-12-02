import { useState } from "react";

const AddTask = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <button onClick={() => console.log(value)}>Add</button>
    </div>
  );
};

export default AddTask;
