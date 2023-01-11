import InputChange from "./Components/input";
import {Link, Route, Routes} from "react-router-dom";
import input from "../src/Components/input"
import TodoList from "./Components/TodoList";


function App() {
  return (
    <div className="App">
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Todo</Link>
            </li>
            <li>
              <Link to={'/todoList'}>TodoList</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/todoList" element={<input />} />
            <Route path="/todoList" element={<TodoList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
