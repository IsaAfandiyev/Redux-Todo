import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {del} from "../../redux/actions/inputValCreators";

const TodoList = () => {
    const todos = useSelector((state)=>state);
    const dispatch = useDispatch();
    return (
        <ul>
            {todos&& todos.map((todo)=>(
                <li>
                    {todo.text}
                    <button onClick={()=>dispatch(del(todo))}>delete</button>
                </li>
            ))}
        </ul>
    )
}
export default TodoList;