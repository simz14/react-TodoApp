const Task = ({ task }) => {
  return (
    <div>
      <div>{task.title}</div>
      <a href="#">Remove</a>
    </div>
  );
};

export default Task;
