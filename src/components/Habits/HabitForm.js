import { useState } from "react"
import { useHistory } from "react-router";




export const HabitForm = () => {

    const [habit, updateHabit] = useState({
        title: "", 
        description: "",
        timeframe: 0,
        daily: false, 
        weekly: false,
        montly: false, 
        yearly: false, 

    });

    
    const history = useHistory()

    const saveHabit = (event) => {
        event.preventDefault()

        const newHabit = {
            name: habit.title, 
            description: habit.description,
            recurring: habit.recurring,
            daily: habit.daily,
            weekly: habit.weekly,
            monthly: habit.monthly,
            yearly: habit.yearly
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
                history.push("/habits")
            })
    }

    
   
 if (document.querySelector("#recurring--habit") ) {
     
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
                     <label htmlFor="recur">Is this a recurring habit?</label>
                     <input
                         required autoFocus
                         type="checkbox"
                         id="recurring--habit"
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
                         <label htmlFor="recurring">How often does this habit re-occur?</label>
                         <div>
                             <label for="form-control">Daily</label>
                             <input
                                 required autoFocus
                                 type="checkbox"
                                 className="form-control"
                                 placeholder="timeframe"
                                 onChange={
                                     (event) => {
                                         const copy = {...habit}
                                         copy.daily = event.target.checked
                                         updateHabit(copy)
                                     }
                                 } />
                         </div>
                         <div>
                             <label for="form-control">Weekly</label>
                             <input
                                 required autoFocus
                                 type="checkbox"
                                 className="form-control"
                                 placeholder="timeframe"
                                 onChange={
                                     (event) => {
                                         const copy = {...habit}
                                         copy.weekly = event.target.checked
                                         updateHabit(copy)
                                     }
                                 } />
                         </div>
                         <div>
                             <label for="form-control">Monthly</label>
                             <input
                                 required autoFocus
                                 type="checkbox"
                                 className="form-control"
                                 placeholder="timeframe"
                                 onChange={
                                     (event) => {
                                         const copy = {...habit}
                                         copy.monthly = event.target.checked
                                         updateHabit(copy)
                                     }
                                 } />
                         </div>
                         <div>
                             <label for="form-control">Yearly</label>
                             <input
                                 required autoFocus
                                 type="checkbox"
                                 className="form-control"
                                 placeholder="timeframe"
                                 onChange={
                                     (event) => {
                                         const copy = {...habit}
                                         copy.yearly = event.target.checked
                                         updateHabit(copy)
                                     }
                                 } />
                         </div>
                     </div>
                 </fieldset>
             <button className="btn btn-primary" onClick={ saveHabit }>
                 Submit Habit
             </button>
         </form>
     )
 } else {
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
                    <label htmlFor="recur">Is this a recurring habit?</label>
                    <input
                        required autoFocus
                        type="checkbox"
                        id="recurring--habit"
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
            <button className="btn btn-primary" onClick={ saveHabit }>
                Submit Habit
            </button>
        </form>
    )
 }

}