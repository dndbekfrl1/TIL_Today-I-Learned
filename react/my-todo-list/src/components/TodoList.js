import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          text={todo.text}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
}
const TodoListBlock = styled.div`
  padding: 20px 32px;
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoList;
