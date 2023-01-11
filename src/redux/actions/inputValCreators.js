import {ADD,DELETE} from "./inputVal.actions";

export const add = () => {
    return {
        type:ADD,
        payload:''
    }
}
export const del = () => {
    return {
        type:DELETE,
        payload:''
    }
}