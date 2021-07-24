import React, { createContext, useContext, useReducer, useRef } from "react";
const initailTodos = [
  { id: 1, text: "낮잠자기", done: true },
  { id: 2, text: "책읽기", done: false },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      console.log("create~", action.todo);
      return state.concat(action.todo);
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error(`undefined action type ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initailTodos);
  const nextId = useRef(3);

  return (
    <TodoNextIdContext.Provider value={nextId}>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          {children}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
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
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("cannot find todoprovider");
  }
  return useContext(TodoDispatchContext);
}
export function useTodoNextID() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("cannot find todoprovider");
  }
  return useContext(TodoNextIdContext);
}
