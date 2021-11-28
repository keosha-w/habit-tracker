import { HabitList } from "./Habits/HabitList"
import { UsersList } from "./users/usersList"
import { Route } from "react-router-dom";
import { HabitForm } from "./Habits/HabitForm";

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
            <Route path="/habits/create">
                <HabitForm />
            </Route>

        </>
    )
}