import {ADD,DELETE} from "./inputVal.actions";

export const add = (item) => {
    return {
        type:ADD,
        payload:item,
    }
}
export const del = (item) => {
    return {
        type:DELETE,
        payload:item,
    }
}