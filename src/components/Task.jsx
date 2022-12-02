import RemoveButton from "./UI/Button";

const Task = ({ task, deleteFn, doneFn }) => {
  return (
    <div>
      <div>{task.title}</div>
      <RemoveButton onClick={() => doneFn(task.title)}>Done</RemoveButton>
      <a href="#" onClick={() => deleteFn(task.title)}>
        Remove
      </a>
    </div>
  );
};

export default Task;
