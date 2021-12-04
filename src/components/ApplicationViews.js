import { HabitList } from "./Habits/HabitList"
import { UsersList } from "./users/usersList"
import { Route } from "react-router-dom";
import { HabitForm } from "./Habits/HabitForm";
import { DailyHabitList } from "./Habits/DailyHabits";
import { Test } from "./Test/Test";
//Responsibility: to determine which information should be displayed when the URL changes

export const ApplicationViews = () => {
    return (
        <>
            <Route  path="/users">
                <UsersList />
            </Route>
            <Route exact path="/habits">
                <HabitList />
            </Route>
            <Route exact path="/habits/daily">
                <DailyHabitList />
            </Route>
            <Route path="/habits/create">
                <HabitForm />
            </Route>
            <Route path="/test">
                <Test />
            </Route>

        </>
    )
}