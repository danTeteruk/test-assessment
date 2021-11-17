import { inject, observer } from "mobx-react";
import React, { FC, useCallback, useState } from "react";
import { ToDo, ToDoStore } from "../stores/ToDoStore";

type InjectedProps = {
  toDoStore: ToDoStore;
};

export const AddRow: FC<InjectedProps> = ({ toDoStore }) => {
  const [value, setValue] = useState("");

  const onAddButtonClick = useCallback((): void => {
    if (!value) return;
    toDoStore.addToDo(value);
    setValue("");
  }, [toDoStore, value, setValue]);

  return (
    <div className="add">
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={onAddButtonClick}>Add</button>
    </div>
  );
};

type ListProps = {
  todos: ToDo[];
  toggleItem: (id: number) => void;
};

export const List: FC<ListProps> = observer(({ todos, toggleItem }) => {
  return (
    <>
      {todos.map((item: ToDo) => (
        <div className={`item ${item.isDone && "crossed"}`} key={item.id}>
          <div>{item.title}</div>
          <div data-testid="toggle"
            className={`checkbox ${item.isDone && "checked"}`}
            onClick={() => toggleItem(item.id)}
          ></div>
        </div>
      ))}
    </>
  );
});

export default inject("toDoStore")(observer(AddRow)) as unknown as FC;
