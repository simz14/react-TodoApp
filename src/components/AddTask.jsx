import { useState } from "react";

const AddButton = styled.button`
  background-color: #4e199d;
`;

const AddTask = ({ addTaskFn, filterFn }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <button
        className={styles.hello}
        onClick={() => {
          addTaskFn(value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
