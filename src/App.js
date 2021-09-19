import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoList/TodoItem";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`appContainer ${dark === false && "lightTheme"}`}>
      <div className="App">
        <Header dark={dark} setDark={setDark} />
        <TodoInput dark={dark} />
        <TodoItem dark={dark} />
        {/* eslint-disable */}
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/JealousGx/todo-challenge" target="_blank">
            JealousGx
          </a>
          .
        </div>
        {/* eslint-enable */}
      </div>
    </div>
  );
}

export default App;
