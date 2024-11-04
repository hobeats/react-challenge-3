import { useState } from "react";

function ToDoList(){
    const [value, setValue] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
        const {currentTarget : {value}, } = event;
        setValue(value);
    };
    const onSubmit = () => {
        
    }
    return <div>
        <form>
            <input placeholder="Write to do"/>
            <button>ADD</button>
        </form>
    </div>;
}

export default ToDoList;