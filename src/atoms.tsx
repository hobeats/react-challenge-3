import { atom, selector } from "recoil";

export interface IToDos {
  text: string;
  id: number;
  category: string;
}

export const ToDoState = atom<IToDos[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(ToDoState);
    const cat = get(categoryState);
    return toDos.filter((toDo) => toDo.category === cat);
  },
});
