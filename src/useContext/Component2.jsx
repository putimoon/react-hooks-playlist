import React, { useContext } from 'react'
import { ThemeContext } from './MyApp';

function Component2() {
    const contextData = useContext(ThemeContext)
    console.log(contextData);
    const toggleHandler = () => {
        contextData.setData(contextData.data === "light" ? "dark" : "light")
    }
    return (
        <div style={contextData.data === "light" ? { backgroundColor: "white",color:"black" } : { backgroundColor: "black",color:"white" }}>
            <div>{contextData.data}</div>
            <button onClick={toggleHandler}>toggle theme</button>
        </div>
    )
}

export default Component2