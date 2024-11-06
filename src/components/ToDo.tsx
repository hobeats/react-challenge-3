import { useSetRecoilState } from "recoil";
import { IToDos, ToDoState } from "../atoms";

function ToDo({ text, category, id }: IToDos) {
  const setToDos = useSetRecoilState(ToDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const tIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[tIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, tIndex),
        newToDo,
        ...oldToDos.slice(tIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          dOiNg
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          tO dO
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          dOnE
        </button>
      )}
    </li>
  );
}

export default ToDo;
