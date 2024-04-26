import React, { useEffect, useState } from 'react'

function File3() {
    const [number, setNumber] = useState(1)
    useEffect(() => {
        if (number % 5 === 0) {
            alert("عدد بر 5 بخش پذیر است")
        }
    }, [number])
    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>add +1</button>
            <div>{number}</div>
        </div>
    )
}

export default File3