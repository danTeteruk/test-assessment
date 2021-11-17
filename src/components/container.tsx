import React, { FC } from "react";
import { ToDo } from "../stores/ToDoStore";
import AddRow, { List } from "./addRow";

type ContainerProps = {
  todos: ToDo[];
  toggleItem: (id: number) => void;
};

export const Container: FC<ContainerProps> = ({ todos, toggleItem }) => {
  return (
    <div className="todo-list">
      <header>TODO List:</header>
      <AddRow />
      <List todos={todos} toggleItem={toggleItem} />
    </div>
  );
};

