import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [inputvalue, setinputvalue] = useState(null);
  let [taskList, setTaskList] = useState([]);
  function handleChange(e) {
    setinputvalue(e.target.value);
  }
  function handleAdd() {
    setTaskList([...taskList, inputvalue]);
    setinputvalue("");
  }
  function handleDelete(value) {
    let tempList = [...taskList];
    setTaskList(tempList.filter((currenttask) => currenttask != value));
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To Do List</h1>
      <input type="text" onChange={handleChange} value={inputvalue}></input>
      <button onClick={handleAdd}>Add-ToDo</button>
      <ul>
        {taskList.map((value, index) => {
          return (
            <div style={{ display: "flex" }}>
              <li>{value}</li>
              <button onClick={() => handleDelete(value)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
