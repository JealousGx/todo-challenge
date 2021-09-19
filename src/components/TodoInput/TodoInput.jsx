import { useState, useEffect } from "react";
import { todoDB } from "../../firebase";
import check from "../../images/icon-check.svg";
import "./TodoInput.css";

const TodoInput = ({ dark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("No todo text added, try adding something!");
      return;
    }
    let id = Math.floor(Math.random() * 101283779216379123);
    const settingTodo = async () => {
      await text;
      await id;
      await setTodo({
        text,
        completed: isClicked,
        id,
      });
    };
    settingTodo();
  };

  useEffect(() => {
    todo && todoDB.collection("todos").add(todo);
  }, [todo]);

  return (
    <form onSubmit={handleSubmit}>
      <div className={`todoInput ${dark === false && "lightTheme"}`}>
        <div className="checkbox">
          <div
            className={`checkmark ${isClicked && "checked"} ${
              dark === false && "lightTheme"
            }`}
            onClick={() => setIsClicked(!isClicked)}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {(isClicked || isHovered) && <img src={check} alt="check mark" />}
          </div>
        </div>
        <div className="input">
          <input
            name="todo text"
            type="text"
            className="todoText"
            onChange={(e) => setText(e.target.value)}
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </form>
  );
};

export default TodoInput;
