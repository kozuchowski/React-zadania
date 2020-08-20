import React, { useState } from "react";


const CountThings = () => {
    const [credit, setCredit] = useState(10000);
    const [age, setAge] = useState(33)

    const addCredit = () => {
        setCredit(prevState => prevState + 1000)
    }


    const addAge = () => {
        setAge(prevState => prevState +1)
    }
    return (
        <div>
            <p>
                💰so much money: ${credit}
            </p>
            <p>
                Age: {age}
            </p>
            <button onClick={addCredit}>Get rich!</button>
            <button onClick={addAge}>Get older:(</button>

        </div>
    )
}

export default CountThings;