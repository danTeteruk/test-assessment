import { action, makeObservable, observable } from "mobx";

export type ToDo = {
  id: number;
  title: string;
  isDone: boolean;
};

export class ToDoStore {
  todos: ToDo[] = [];
  lastId = 1;

  constructor() {
    makeObservable(this, {
      todos: observable,
      toggleItem: action,
      addToDo: action,
    });
  }

  addToDo(item: string) {
    this.todos.push({ id: this.lastId, title: item, isDone: false });
    this.lastId = this.lastId + 1;
  }

  toggleItem(id: number) {
    this.todos = this.todos.map((item: ToDo) =>
      item.id === id ? { ...item, isDone: item.isDone ? false : true } : item
    );
  }
}

const store = new ToDoStore();
export default store;
