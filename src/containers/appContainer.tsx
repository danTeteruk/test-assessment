import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import { Container } from "../components/container";
import { ToDoStore } from "../stores/ToDoStore";

type InjectedProps = {
  toDoStore: ToDoStore;
};

export const AppContainer: FC<InjectedProps> = ({ toDoStore }) => {
  const toggleDone = (id: number) => {
    toDoStore.toggleItem(id);
  };

  return (
    <>
      <div className="container">
        <Container todos={toDoStore.todos} toggleItem={toggleDone} />
      </div>
    </>
  );
};

export default inject("toDoStore")(observer(AppContainer)) as unknown as FC;
