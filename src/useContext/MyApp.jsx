import React, { createContext, useState } from 'react'

export const ThemeContext = createContext("initial")

function MyApp({ children }) {
    const [data, setData] = useState("light")
    return (
        <ThemeContext.Provider value={{ data, setData }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default MyApp