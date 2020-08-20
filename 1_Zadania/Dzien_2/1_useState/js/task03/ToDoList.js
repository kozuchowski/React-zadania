import React, { useState } from "react";


const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [counter, setCounter] = useState(0)

    const addTask = () => {
        setCounter(prevState => prevState +1)
        setTasks(prevState => [...prevState,"Zadanie "+ counter] )
    }

    return (
        <>
            <button onClick={addTask}>Dodaj zadanie</button>
            <ul>
                {tasks.map((e,counter)=><li key={counter}>{e}</li>)}
            </ul>

        </>
    )
}

export default ToDoList;