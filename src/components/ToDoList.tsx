import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {ToDoState, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import userEvent from "@testing-library/user-event";
import AddCat from "./AddCat";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [cat, setCat] = useRecoilState(categoryState);
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    setCat(event.currentTarget.value as any);
  }
  return (
    <div>
      <h1>TO DOs</h1>
      <AddCat/>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "0px 5px",
        }}
      >
        <select style={{ height: 21 }} onInput={onInput}>
          <option value="TO_DO">TO DO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>
        <CreateToDo />
      </div>
      {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
    </div>
  );
}

export default ToDoList;
