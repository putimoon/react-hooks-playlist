import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function TestArray() {
    // add => [...list,{}]
    // remove => filter
    // replace => map
    // reverse => reverse
    // =======================
    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    const addTodo = () => {
        setList([...list, { id: uuidv4(), title: task, status: false }])
    }
    const deleteHandler = (id) => {
        const newArray = list.filter((item) => item.id !== id)
        setList(newArray)
    }
    const doneTodo = (id) => {
        const newArray = list.map((item) => {
            if (item.id === id) {
                return { ...item, status: !item.status }
            } else {
                return item
            }
        })
        setList(newArray)
    }
    const reverseHandler = () => {
        const newArr = [...list]
        newArr.reverse()
        setList(newArr)
    }
    return (
        <div>
            <div>
                <button onClick={reverseHandler}>reverse</button>
                <button onClick={addTodo}>add</button>
                <input type="text" name='task' value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div>{list.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{item.title}</div>
                        <div style={{ backgroundColor: item.status ? 'green' : "red" }}>{item.status ? "تسک انجام شده" : "تسک درحال انجام"}</div>
                        <button onClick={() => deleteHandler(item.id)}>delete</button>
                        <button disabled={item.status} onClick={() => doneTodo(item.id)}>done todo</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default TestArray