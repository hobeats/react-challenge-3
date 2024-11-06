import { useSetRecoilState } from "recoil";
import { Categories, IToDos, ToDoState } from "../atoms";

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
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          dOiNg
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          tO dO
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          dOnE
        </button>
      )}
    </li>
  );
}

export default ToDo;
