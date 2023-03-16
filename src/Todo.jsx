import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Todo = () => {
  // task (todo list) state
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task One", status: false },
    { id: 2, title: "Task Two", status: false },
  ]);

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setupdateData] = useState("");

  // add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // delete task
  const deleteTask = (id) => {
    let del = toDo.filter((task) => task.id !== id);
    setToDo(del);
  };

  // mark task done or complete
  const markDone = (id) => {
    let doneTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(doneTask);
  };

  // cancel update
  const cancelUpdate = () => {
    setupdateData("");
  };

  // change task for update

  const changeTask = (e) => {
    let editTask = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setupdateData(editTask);
  };
  // todo update task
  /*
  Take the updated objects from the temp state compare its id with the id in our original state in the todo list
  then removes that record and add the updated object in to the todo list
  */
  const updateTask = () => {
    let updateRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...updateRecords, updateData];
    setToDo(updateObject);
    setupdateData("");
  };

  // remove All
  const removeAll = () => {};

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <form className="mb-6">
          {updateData && updateData ? (
            <div className="mb-6">
              <input
                className="w-[350px] px-2 py-2 rounded-md text-black border-none outline-none"
                type="text"
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
              />
              <span
                onClick={updateTask}
                className="ml-6 py-2 px-2 text-white bg-blue-700 text-lg font-semibold cursor-pointer rounded-md hover:bg-green-600 active:bg-purple-500"
              >
                Update
              </span>
              <span
                onClick={cancelUpdate}
                className="ml-6 py-2 px-2 text-white bg-blue-700 text-lg font-semibold cursor-pointer rounded-md hover:bg-green-600 active:bg-purple-500"
              >
                Cancel
              </span>
            </div>
          ) : (
            <div>
              <input
                className="w-[350px] px-2 py-2 rounded-md text-black border-none outline-none"
                type="text"
                placeholder="Enter your task here"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <span
                onClick={addTask}
                className="ml-6 py-2 px-2 text-white bg-blue-700 text-lg font-semibold cursor-pointer rounded-md hover:bg-green-600 active:bg-purple-500"
              >
                Add Task
              </span>
            </div>
          )}
        </form>
        {toDo.map((task, index) => {
          return (
            <React.Fragment>
              <div className="mt-4 w-[450px] bg-gray-900 py-2 px-2 flex justify-between gap rounded-md">
                <span>
                  <span>{index + 1}</span> {task.title}
                </span>
                <span>
                  <span
                    onClick={(e) => markDone(task.id)}
                    title="Completed/ Not Completed"
                    className="mr-2"
                  >
                    <DoneIcon />
                  </span>
                  {task.status ? null : (
                    <span
                      onClick={() =>
                        setupdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false,
                        })
                      }
                      title="Edit"
                      className="mr-2"
                    >
                      <EditIcon />
                    </span>
                  )}
                  <span
                    onClick={() => deleteTask(task.id)}
                    title="Delete"
                    className="mr-2"
                  >
                    <DeleteIcon />
                  </span>
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
