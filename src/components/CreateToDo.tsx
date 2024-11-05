import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ToDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(ToDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "pLeAsE wRiTe ToDo",
        })}
        placeholder="Write A to do"
      />
      <button>ADD</button>
    </form>
  );
}

export default CreateToDo;
