import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { ToDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(ToDoState);
  return (
    <div>
      <h1>TO DOs</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
