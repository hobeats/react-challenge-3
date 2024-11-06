import { atom, selector } from "recoil";

export const enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDos {
  text: string;
  id: number;
  category: Categories;
}

export const ToDoState = atom<IToDos[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(ToDoState);
    const cat = get(categoryState);
    return toDos.filter((toDo) => toDo.category === cat);
  },
});
