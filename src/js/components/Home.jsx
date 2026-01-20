import React from "react";
import Switch from "./Switch";

function Home() {
  const [toDoText, setToDoText] = React.useState("");
  const [toDoList, setToDoList] = React.useState([]);

  const addListItem = () => {
    if (toDoText.trim() !== "") {
      setToDoList([...toDoList, toDoText.trim()]);
      setToDoText("");
    }
  };

  const deleteItem = (item) => {
    const index = toDoList.indexOf(item.target.parentElement.parentElement.textContent.trim());
    if (index > -1) {
      const newList = [...toDoList];
      newList.splice(index, 1);
      setToDoList(newList);
    };
  };

  return (
    <div className="text-center">
      <div className="row">
        <div className="col">
          <h1 className="fs-1 mt-5">My To Do list</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-center">
          <div className="inputContainer position-relative widthResponsive">
            <input
              className="toDoInput p-3 w-100"
              type="text"
              onChange={(e) => setToDoText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addListItem();
                }
              }}
              value={toDoText}
            />
            <button onClick={addListItem} className="btn inputButton">
              <i className="bi bi-arrow-right-short fs-3"></i>
            </button>
          </div>
        </div>
      </div>

      <ul className="mt-4 d-flex flex-column align-items-center p-0">
        {toDoList.map((item, index) => (
          <li className="widthResponsive mb-3" key={index}>{item}
            <div className="actions d-flex flex-direction-column align-items-center">
              <Switch />
              <i class="bi bi-trash ms-2 fs-5 trashButton" onClick={e => deleteItem(e)}></i>
            </div></li>
        ))}
      </ul>
    </div>
  );
}

export default Home;