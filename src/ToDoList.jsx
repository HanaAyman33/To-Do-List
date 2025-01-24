import React, {useState} from 'react';

function ToDoList(props){

    const username = props.username;
    const date = props.date;

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t,newTask]);
            setNewTask("");
        }
    }
    function doneTask(index){
        const updatedTasks = task.filter((_, i) => i!==index);
        setTask(updatedTasks);
    }
    function deleteTask(index){
        const  updatedTasks = task.filter((_, i) => i!==index);
        setTask(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const  updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < task.length-1){
            const  updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>{username}'s TO-DO-List</h1>
            <h2>Date: {date}</h2>
            <div>
                <input type="text" 
                placeholder='Enter a task..' 
                value={newTask}
                onChange={handleInputChange}></input>
                <button className="add-button"
                onClick={addTask}>Add</button>
            </div>
            <ol>
            {task.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className='done-button' 
                    onClick={() => doneTask(index)}>✅</button>
                    <button className='delete-button' 
                    onClick={() => deleteTask(index)}>❌</button>
                    <button className='up-button' 
                    onClick={() => moveTaskUp(index)}>👆🏻</button>
                    <button className='down-button' 
                    onClick={() => moveTaskDown(index)}>👇🏻</button>
                </li>)}
            </ol>
        </div>
    );
}

export default ToDoList