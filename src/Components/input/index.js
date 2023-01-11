import {useDispatch} from "react-redux";
import {add} from "../../redux/actions/inputValCreators"
import React from "react";
import {useState} from "react";

function InputChange() {
    const [inputValue,setInputValue] = useState('');
    const dispatch = useDispatch();

    const submit=(e)=>{
        e.preventDefault();
        dispatch(add(inputValue));
        setInputValue('');
    }

    return <>
        <form onSubmit={(e)=>submit(e)}>
            <p>Add todo</p>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button>add</button>
        </form>
    </>
}
export default InputChange;