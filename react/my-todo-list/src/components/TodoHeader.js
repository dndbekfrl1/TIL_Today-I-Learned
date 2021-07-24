import React from "react";
import styled from "styled-components";
import { useTodoState } from "./TodoContext";
function TodoHeader() {
  const todos = useTodoState();
  const undone = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <HeaderBlock>
      <h2>{dateString}</h2>
      <div className="tasks-left">해야할 일 {undone.length}개 남음 </div>
    </HeaderBlock>
  );
}
const HeaderBlock = styled.div`
  border-bottom: 1px solid black;
  padding: 30px 30px;
  h2 {
    margin: 0;
    font-size: 30px;
    color: blue;
  }
  .tasks-left {
    margin-top: 10px;
  }
`;

export default TodoHeader;
