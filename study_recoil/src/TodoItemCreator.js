import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./TodoList";

function TodoItemCreator(){
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = ()=>{
        setTodoList((oldTodoList)=>[
            ...oldTodoList,
            {
                id:getID(),
                text:inputValue,
                isComplete:false,
            }
        ]);
        setInputValue('');
    };

    const onChange = ({target:{value}})=>{
        setInputValue(value);
    };

    return(
        <div>
            <input type="text" value={inputValue} onChange={onChange}/>
            <button onClick={addItem}>Add</button>
        </div>

    );
};

export default TodoItemCreator;

let id = 0;
function getID(){
    return id++;
};