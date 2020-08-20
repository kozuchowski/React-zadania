import React , { useState } from "react"



const ColorFulBoxes = () => {
        const [colors, setColors] = useState([])
        const [counter,setCounter] = useState(0)

    const addBox = () => {
        
        setColors(prevState =>prevState.concat( "#"+ Math.floor(Math.random()*16777215).toString(16)))
        setCounter(prevState => prevState +1)

    }
    


    return (
        <>
        <button onClick={addBox}>Dodaj Boxa!</button>
        {colors.map(element => (
            
                <div key={colors.indexOf(element)} style={{width:"20px", height:"20px", background:element}}></div>
        ))}
        </>
        
    )
}

export default ColorFulBoxes;