import React, { createContext, useContext, useReducer, useRef } from "react";

const initalTodos = [
  {
    id: 1,
    text: "프로젝트 생섣하기",
    done: true,
  },
  { id: 2, text: "컴포넌트 스타일링하기", done: true },
  { id: 3, text: "context 만들기", done: false },
  { id: 4, text: "기능 구현하기", done: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initalTodos);
  const nextId = useRef(5);

  return (
    //context의 순서가 중요한가용?
    <TodoNextIdContext.Provider value={nextId}>
      {/*Context.Providr로 현재값을 읽는다! value prop을 받아서 하위 컴포넌트에 값을 전달
        하위 Provider의 값이 우선시 된다고?
        Provider의 value prop이 바뀔 때마다 다시 렌더링 됨

        1. context 생성
        2. context 값 설정
        3. 해당 context 구독하는 컴포넌트가 context데이터 사용!
        
        */}
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoStateContext.Provider value={state}>
          {children}
        </TodoStateContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoNextIdContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("cannot find todoprovider");
  }
  return useContext(TodoStateContext);
}
export function useTodoDispatch() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("cannot find todoprovider");
  }
  return useContext(TodoDispatchContext);
}

export function useTodoNextID() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("cannot find todoprovider");
  }
  return useContext(TodoNextIdContext);
}
