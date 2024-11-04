import { useState } from "react";
import { useForm } from "react-hook-form";
/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("TOO SHORT!!!");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder="Write A to do" />
        <button>ADD</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  function onValid(data: any) {
    console.log(data);
  }
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("userName", { required: true, minLength: 10 })}
          placeholder="User Name"
        />
        <input
          {...register("password", { required: true, minLength: 10 })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: "Password is required", minLength:{
            value:5,
            message:"Password minimum is 5"
          } })}
          placeholder="Password Confirm"
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default ToDoList;
