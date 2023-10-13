import {Task} from "./Task";
import {AddTask} from "./AddTask";
import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import '../styles/TaskList.css'

export const TaskList = ({tasks}) => {
    const [tasksList, setTaskList] = useState(tasks);
    const [taskTitle, setTaskTitle] = useState('');
    const handleChange = (event) => {
        setTaskTitle(event.target.value);
    }

    const handleAddTask = () => {
        const newList = tasksList.concat({ title:taskTitle, id: uuidv4() });
        setTaskList(newList);
        setTaskTitle('');
    }
    return(
        <div className='list'>
        <AddTask handleAddProp={handleAddTask} handleChangeProp={handleChange}/>
        {tasksList.map((task) => (
         <Task task={task}></Task>
        ))}
      </div>
    )
}


