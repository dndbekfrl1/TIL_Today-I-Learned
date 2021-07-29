import React from "react";
import styled, { css } from "styled-components";
import { useTodoState, useTodoDispatch } from "./TodoContext";

function TodoItem({ id, done, text, deleteTodo, toggleTodo }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({ type: "TOGGLE", id });
  };
  const onRemove = () => {
    dispatch({ type: "DELETE", id });
  };
  return (
    <TodoItemBlock>
      <Check
        onClick={() => {
          toggleTodo(id);
        }}
        done={done}
      >
        V
      </Check>
      <Text done={done}>{text}</Text>
      <Delete
        onClick={() => {
          deleteTodo(id);
        }}
      >
        🗑
      </Delete>
    </TodoItemBlock>
  );
}
const Delete = styled.div`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    display: block;
  }
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const Check = styled.div`
  margin-right: 20px;
  width: 32px;
  height: 32px;
  color: blue;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border: 1px solid blue;
  ${(props) =>
    props.done &&
    css`
      color: gray;
      border: 1px solid gray;
    `}
`;

const Text = styled.div`
  color: blue;
  font-size: 20px;
  ${(props) =>
    props.done &&
    css`
      color: gray;
    `}
`;

export default TodoItem;
