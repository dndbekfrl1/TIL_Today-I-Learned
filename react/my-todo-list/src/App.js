import { createGlobalStyle } from "styled-components";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
body{
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
}`;

const initailTodos = [
  { id: 1, text: "낮잠자기", done: true },
  { id: 2, text: "책읽기", done: false },
];
function App() {
  const [todos, setTodo] = useState(initailTodos);
  const createTodo = (todo) => {
    setTodo(todos.concat(todo));
  };
  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoListTemplate>
        <TodoHeader />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <TodoCreate createTodo={createTodo} />
      </TodoListTemplate>
    </TodoProvider>
  );
}

export default App;
