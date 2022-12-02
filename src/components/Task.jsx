import styled from "styled-components";
import RemoveButton from "./UI/Button";

const TaskWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Task = ({ task, deleteFn, doneFn }) => {
  return (
    <TaskWrapper>
      <Title>{task.title}</Title>
      <RemoveButton onClick={() => doneFn(task.title)}>Done</RemoveButton>
      <a href="#" onClick={() => deleteFn(task.title)}>
        Remove
      </a>
    </TaskWrapper>
  );
};

export default Task;
