const Task = ({ task, deleteFn, doneFn }) => {
  return (
    <div>
      <div>{task.title}</div>
      <button onClick={() => doneFn(task.title)}>Done</button>
      <a href="#" onClick={() => deleteFn(task.title)}>
        Remove
      </a>
    </div>
  );
};

export default Task;
