import React, { FC } from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
