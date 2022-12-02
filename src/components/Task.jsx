const Task = ({ task, deleteFn }) => {
  return (
    <div>
      <div>{task.title}</div>
      <a href="#" onClick={() => deleteFn(task.title)}>
        Remove
      </a>
    </div>
  );
};

export default Task;
