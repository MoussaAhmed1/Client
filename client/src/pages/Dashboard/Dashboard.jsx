import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import { DeleteTodo, addTodo,ToogleTodo } from "../../Redux/Actions/TodosActions";
export default function Dashboard() {
  const todos = useSelector((state) => state.Todos.todos);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth)
  
  const addTodohandle = () => {
    if (newTask) {
      let _id = todos.length + 4 ;
      //dispatch
      dispatch(addTodo(newTask,_id,Auth.username,Auth.password));
      setNewTask("");
      //call the back-end

    }
  };

  const deleteTask = (id) => {
    //dipatch
    dispatch(DeleteTodo(id,Auth.username,Auth.password))
  };

  const markDone = (id) => {
    dispatch(ToogleTodo(id,Auth.username,Auth.password))
  }
  return (
    <section className="dashboard">
      <div className="overlay"></div>
      <div className="container py-5 text-center">
        <div className="text-light dashboard-content w-100">
        <div className="row">
        <div className="col">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={addTodohandle}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
         
            {todos.length > 0 ? (
              todos
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((todo) => {
                  return (
                    <div className="row todo p-2 my-2 bg-dark"  key={todo.id} >
                      <div className="col text-start">
                        <span>{todo.task}</span>
                      </div>
                      <div className="col-auto d-flex gap-2">
                        <span
                          title="Completed / Not Completed"
                          onClick={() => markDone(todo.id)}
                        >
                          <i className={`fa-solid fa-circle-check ${todo.completed?"text-success":""}`}></i>
                        </span>
                        <span
                          title="Delete"
                          onClick={() => deleteTask(todo.id)}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </span>
                      </div>
                    </div>
                  );
                })
            ) : (
              <p>No Todos yet</p>
            )}
        </div>
      </div>
    </section>
  );
}
