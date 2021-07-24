import { createGlobalStyle } from "styled-components";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
body{
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
}`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoListTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoListTemplate>
    </TodoProvider>
  );
}

export default App;
