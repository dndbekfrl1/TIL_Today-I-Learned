import React from "react";
import styled from "styled-components";

function TodoListTemplate({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

const TemplateBlock = styled.div`
  width: 600px;
  height: 800px;
  border-radius: 20px;
  background-color: white;
  margin-top: 50px;
  position: relative;
  display: flex;

  flex-direction: column;
`;

export default TodoListTemplate;
