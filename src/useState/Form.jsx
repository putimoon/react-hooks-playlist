import React from 'react'
import { useState } from 'react'

function Form() {
    const [username, setUsername] = useState("")
    const [count, setCount] = useState(0)
    const [checkInput, setcheckInput] = useState(false)
    const [age, setAge] = useState(30)
    const [name, setName] = useState('ali')
    const [isStudent, setIsStudent] = useState(false)
    const onChangeNameHandler = () => {
        setName("reza")
        console.log(name);
    }
    const onChangeAgeHandler = () => {
        setAge((preAge) => preAge + 1)
        setAge((preAge) => preAge + 1)
        setAge((preAge) => preAge + 1)
    }
    const increaseCountHandler = () => {
        setCount(count + 1)
    }
    const decreaseCountHandler = () => {
        setCount(count - 1)
    }
    const resetCounter = () => {
        setCount(0)
    }
    const checkHandler = (event) => {
        setcheckInput(event.target.checked)
    }
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }
    console.log(username);
    return (
        <div>
            <div>age is: {age}</div>
            <button onClick={onChangeAgeHandler}>add +1 to age</button>
            <div>name is : {name}</div>
            <div>is student ? {isStudent ? "yes" : "no"}</div>
            <button onClick={onChangeNameHandler}>change name</button>

            <div>
                <button onClick={increaseCountHandler}>+1</button>
                <div>{count}</div>
                <button onClick={decreaseCountHandler}>-1</button>
                <button onClick={resetCounter}>reset</button>
            </div>

            <div>
                is student :<input type="checkbox" onChange={(e) => checkHandler(e)} value={checkInput} name="student" id="student" />
                <p>{checkInput ? "yes" : "no"}</p>
            </div>

            <input type="text" name='username' onChange={usernameHandler} value={username} />
        </div>
    )
}

export default Form