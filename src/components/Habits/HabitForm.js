import { useState } from "react"
import { useHistory } from "react-router";



export const HabitForm = () => {

    const [habit, updateHabit] = useState({
        title: "", 
        description: "",
        timeframe: 0,
        recurring: false

    });

    

    const saveHabit = (event) => {
        event.preventDefault()

        const newHabit = {
            name: habit.title, 
            description: habit.description,
            recurring: habit.recurring,
            timeframe: habit.timeframe
        }

        const fetchOptions = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHabit)
        }

        return fetch("http://localhost:8089/habits", fetchOptions)
            .then(() => {
                
            })
    }



    return (
        <form className="employee__app">
            <h2 className="employee__app__title">Add a new Habit</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        onChange={
                            (event) => {
                                const copy = {...habit}
                                copy.title = event.target.value
                                updateHabit(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        onChange={
                            (event) => {
                                const copy = {...habit}
                                copy.description = event.target.value
                                updateHabit(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="specialty">Is this a recurring habit?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...habit}
                                copy.recurring = event.target.checked
                                updateHabit(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="specialty">How often does this habit re-occur?</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="timeframe"
                        onChange={
                            (event) => {
                                const copy = {...habit}
                                copy.timeframe = parseInt(event.target.value)
                                updateHabit(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={ saveHabit }>
                Submit Habit
            </button>
        </form>
    )

}