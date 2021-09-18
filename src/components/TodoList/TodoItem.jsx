import "./TodoItem.css";
import check from "../../images/icon-check.svg";
import cross from "../../images/icon-cross.svg";
import { useEffect, useState } from "react";
import { todoDB } from "../../firebase";

const TodoItem = ({ dark }) => {
  const [isCheckClicked, setIsCheckClicked] = useState(false);
  const [category, setCategory] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoDB.collection("todos").onSnapshot((snap) => {
      let document = [];
      snap.forEach((doc) => {
        document.push({ ...doc.data(), docID: doc.id });
      });

      let filteredDoc = [];

      if (category === 1) {
        setTodos(document);
      }
      if (category === 2) {
        document.forEach(
          (doc) => doc.completed === false && filteredDoc.push(doc)
        );
        setTodos(filteredDoc);
      }
      if (category === 3) {
        document.forEach(
          (doc) => doc.completed === true && filteredDoc.push(doc)
        );
        setTodos(filteredDoc);
      }
    });
  }, [category]);

  const handleDelete = (docID) => {
    todoDB.collection("todos").doc(docID).delete();
  };

  // Handle check mark actions
  const handleCheckMark = (docID) => {
    setIsCheckClicked(!isCheckClicked);
    todoDB.collection("todos").doc(docID).update({ completed: isCheckClicked });
  };

  //Handle ClearCompleted button
  const clearCompleted = (e) => {
    e.preventDefault();
    if (!todos.length) {
      return alert("No todo list exists!\nCreate some todos");
    }

    todos.map(
      (doc) =>
        doc.completed && todoDB.collection("todos").doc(doc.docID).delete()
    );
  };

  return (
    <div className="todoItem">
      {todos &&
        todos.map((item, id) => (
          <div className={`itemContainer ${!dark && "lightTheme"}`} key={id}>
            <div className="checkbox">
              <div
                className={`checkmark ${item.completed && "checked"}`}
                onClick={() => handleCheckMark(item.docID)}
              >
                <img
                  src={check}
                  alt="check mark"
                  className={`checkImg ${item.completed && "checked"}`}
                />
              </div>
            </div>
            <div className="todoWrap">
              <div className="todoText">
                <span>{item.completed ? <s>{item.text}</s> : item.text}</span>
              </div>
              <img
                src={cross}
                alt="cross mark"
                className="image"
                onClick={() => handleDelete(item.docID)}
              />
            </div>
          </div>
        ))}

      {/* Footer */}
      <div className={`todoFooter ${!dark && "lightTheme"}`}>
        <div className="items">
          <span>{todos ? todos.length : 0}</span> items left
        </div>
        <div className="categories">
          <span
            onClick={() => setCategory(1)}
            className={`${category === 1 && "clicked"}`}
          >
            All
          </span>
          <span
            onClick={() => setCategory(2)}
            className={`${category === 2 && "clicked"}`}
          >
            Active
          </span>
          <span
            onClick={() => setCategory(3)}
            className={`${category === 3 && "clicked"}`}
          >
            Completed
          </span>
        </div>
        <div className="clearCompleted" onClick={clearCompleted}>
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
