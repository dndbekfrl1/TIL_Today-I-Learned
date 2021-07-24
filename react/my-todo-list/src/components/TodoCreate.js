import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useTodoNextID, useTodoDispatch } from "./TodoContext";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextID = useTodoNextID();
  const onToggle = () => {
    setOpen(!open);
  };
  const onChage = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextID.current,
        text: value,
        done: false,
      },
    });
    nextID.current += 1;
    setValue("");
    setOpen(false);
  };

  console.log("value", value);
  return (
    <>
      {open && (
        <InsertFormWrapper>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력 후, 엔터키를 누르세요."
              autoFocus={true}
              onChange={onChage}
              value={value}
            ></Input>
          </InsertForm>
        </InsertFormWrapper>
      )}
      <CircleButton onClick={onToggle}>+</CircleButton>
    </>
  );
}

const CircleButton = styled.div`
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  width: 80px;
  height: 80px;
  background-color: blue;
  color: white;
  border-radius: 50px;
  font-size: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  left: 50%;
  bottom: 0px;
  position: absolute;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: skyblue;
      &:hover {
        background: skyblue;
      }
      &:active {
        background: blue;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormWrapper = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
  background: #f8f9fa;
  border-radius: 0 0 20px 20px;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  height: 200px;
  margin: 0px 40px;
  padding-top: 80px;
`;

const Input = styled.input`
  background-color: white;
  outline: none;
  width: 100%;
  border: none;
  margin: 0px;
  padding: 20px 0;
  border-radius: 4px;
  font-size: 20px;
`;
export default TodoCreate;
