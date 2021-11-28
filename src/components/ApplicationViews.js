import { HabitList } from "./Habits/HabitList"
import { UsersList } from "./users/usersList"
import { Route } from "react-router-dom";

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
            

        </>
    )
}