import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function File() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("https://catfact.ninja/facts").then((res) => {
            console.log(res.data);
            setList(res.data.data)
        }).catch(() => {
            setList([])
        })
    }, [])
    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{item.length}</div>
                        <div>{item.fact}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default File