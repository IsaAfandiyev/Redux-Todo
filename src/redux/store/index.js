import {createStore} from 'redux'
import todoReducer from "../reducers/todos.reducers"

   const store = createStore(todoReducer);

export default store;