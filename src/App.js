import './App.css';
import imgListOne from "./to-do.png"
import imgListTwo from "./list.png";
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className="center">
        <h1><img src={imgListOne} alt="list" width="50px" height="45px"/>TO-DO LIST</h1>
      </div>
      <ToDoList/>
      <div className="center">
        <img className="img-position" src={imgListTwo} alt="list" width="250px"/>
      </div>
    </div>
  );
}

export default App;