import { useReducer, useState } from "react";
import style from "./todo.module.css";
const Todo = () => {
  const ACTIONS = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
  };
  const [text, setText] = useState("");
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      case ACTIONS.DELETE_TODO:
        return state.filter((state) => state.id !== action.payload);

      default:
        return state;
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch({ type: ACTIONS.ADD_TODO, payload: text });
  };

  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <label htmlFor="">Todo: </label>
      <input
        placeholder="What is on your mind today?"
        onChange={handleChange}
      />{" "}
      <button className={style.button} onClick={handleSubmit}>
        {" "}
        validate{" "}
      </button>
      {state.map((todo) => (
        <p key={todo.id}>
          {todo.text} <button className={style.button}>Erase</button>{" "}
          <button
            className={style.button}
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
            }
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};
export default Todo;
