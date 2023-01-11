const {useState} = require("react");

function InputChange() {
    const [inputValue,setInputValue] = useState('');
    console.log(inputValue)

    return <>
        <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
        <button>Add</button>
    </>
}
export default InputChange;