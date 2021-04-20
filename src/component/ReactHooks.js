import React, { useState } from 'react'


export default function ReactHooks() {

    const tasks = [
        {
            id: null,
            task: null
        }
    ]

    const [toDoArray, setToDoArray] = useState(tasks)
    const [inputTask, setInputTask] = useState("")

    const changeInputContent = (event) => {
        setInputTask(event.target.value);
        event.preventDefault();
    }

    const submitFormData = (event) => {


        setToDoArray(previousTasks => [...previousTasks, {
            id: previousTasks.length,
            task: inputTask
        }])

        event.preventDefault();
    }

    const deleteTask = (id) => {
        var tempArray = toDoArray.filter((element) => {
            return (element.id !== id)
        })

        setToDoArray(tempArray);
    }

    return (
        <div>
            <form onSubmit={submitFormData}>
                <label> Enter new task </label>
                <input type="text" value={inputTask} onChange={changeInputContent}></input>
                <button type="submit">submit</button>
            </form>
            <div>
                {toDoArray.map((element) => {
                    return (element.id ? (<div>

                        {element.id}.  {element.task}
                        <button onClick={() => deleteTask(element.id)}>Delete {element.id}</button>
                    </div>
                    ) : "")
                })}
            </div>

        </div>
    )
}
