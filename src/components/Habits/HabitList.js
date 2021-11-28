import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"


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
            <div>
                
            </div>   
            {
                habits.map(
                    (habitObj) => {
                        return <h3 key={`habit--${habitObj.id}`}>
                            <div>{habitObj.title}</div>
                            <div>{habitObj.description} every {habitObj.title} hours.</div>
                            </h3>
                    }
                )
            }
        </>
    )
}

