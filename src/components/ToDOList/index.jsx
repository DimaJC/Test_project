import React, { useState } from "react";
import { useEffect } from "react";

import "./ToDOList.scss";

const ToDOList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem('todo'));
    if (!!todo && !!todo.length) {
      setTodos(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleEditText = (event) => {
    setEditText(event.target.value);
  };

  const addTextInTodo = () => {
    if (text.length) {
      setTodos([...todos, { id: Date.now(), text: text }]);
      setText("");
    }
  };

  const henldeRemoveItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const removeTodo = () => {
    setTodos([]);
  };

  const changeTodo = () => {
    setTodos(
      todos.map((item) => {
        return item.id === editTodo ? { ...item, text: editText } : item;
      }),
    );
    setEditText("");
    setEditTodo(null);
  };
  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          value={text}
          placeholder="Напиши мне что-то"
        />
        <button onClick={addTextInTodo}>Добавить текст</button>
      </div>
      <div>
        {todos.map((item) => {
          return editTodo === item.id ? (
            <div>
              <input
                type="text"
                placeholder={item.text}
                value={editText}
                onChange={handleEditText}
              />
              <button onClick={changeTodo}>Сохранить</button>
              <button onClick={() => setEditTodo(null)}>Отмена</button>
            </div>
          ) : (
            <div>
              <p
                onClick={() => {
                  setEditTodo(item.id);
                  setEditText(item.text);
                }}
              >
                {item.text}
              </p>
              <button onClick={() => henldeRemoveItem(item.id)}>
                Удалить!
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={removeTodo}>Удалить все!</button>
    </div>
  );
};

export default ToDOList;
