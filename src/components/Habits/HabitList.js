import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { HabitForm } from "./HabitForm"

export const HabitList = () => {
    const [habits, setHabits] = useState([])

    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8089/habits")
                .then(response => response.json())
                .then((habitArray) => {
                    setHabits(habitArray)
                }
                )
        },
        []
    )


    return (
        <>    
            {
                habits.map(
                    (habitObj) => {
                        return <h3 key={`habit--${habitObj.id}`}>
                            <div>{habitObj.title}</div>
                            <div>{habitObj.description} every {habitObj.timeframe} day.</div>
                            </h3>
                    }
                )
            }
            <div>
                <button onClick={
                    () => history.push("/habits/create")
                } >New</button>
            </div>   
        </>
    )
}

