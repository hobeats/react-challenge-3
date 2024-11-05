import { atom } from "recoil";

export interface IToDos {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const ToDoState = atom<IToDos[]>({
  key: "toDo",
  default: [],
});
