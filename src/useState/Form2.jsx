import React, { useState } from 'react'

function Form2() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        typeA: {
            input1: '1234',
            input2: ""
        }
    })
    const inputHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const handleInput2 = (e) => {
        setInputs({
            ...inputs,
            typeA: {
                ...inputs.typeA,
                input2: e.target.value
            }
        })
    }
    console.log(inputs);
    return (
        <div>
            <input onChange={inputHandler} type="text" name='username' value={inputs.username} />
            <input onChange={inputHandler} type="text" name='email' value={inputs.email} />
            <input onChange={inputHandler} type="text" name='password' value={inputs.password} />
            <input onChange={handleInput2} type="text" name='input2' value={inputs.typeA.input2} />
        </div>
    )
}

export default Form2