import React,{useState} from "react";

function ToDoList(){

    const [tasks,setTasks] = useState([]);
    const [newtasks,setNewTsk] = useState("");

    function handleInputChange(event){
        setNewTsk(event.target.value);

    }

    function addtasks(){
        if (newtasks.trim() !== "") {
            setTasks([...tasks, newtasks]);
            setNewTsk("");
          }
    }

    function deletetasks(index){
        const updatedtasks = tasks.filter((_,i) => i!==index)
        setTasks(updatedtasks);

    }

    function movetasksUp(index){
        if(index > 0){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index - 1]] = [updatedtasks[index - 1],updatedtasks[index]];
            setTasks(updatedtasks);
        }

    }

    function movetasksDown(index){
        if(index < tasks.length - 1){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index + 1]] = [updatedtasks[index + 1],updatedtasks[index]];
            setTasks(updatedtasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a tasks..."
                    value={newtasks}
                    onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addtasks}>
                    Add Task
                </button>
            </div>
            <ol>
                {tasks.map((tasks,index)=>
                    <li key={index}>
                        <span className="text">{tasks}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deletetasks(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>movetasksUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>movetasksDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList