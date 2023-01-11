import InputChange from "./Components/input";
import {Link, Route, Routes} from "react-router-dom";
import InputChanges from "../src/Components/input/index";
import TodoList from "./Components/TodoList";


function App() {
  return (
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
            <Route path="/" element={<InputChange />} />
            <Route path="/todoList" element={<TodoList />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
