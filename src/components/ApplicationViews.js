import { HabitList } from "./Habits/HabitList"
import { UsersList } from "./users/usersList"
import { Route, Redirect } from "react-router-dom";


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/users">
                <UsersList />
            </Route>
            <Route path="/habits">
                <HabitList />
            </Route>
            

        </>
    )
}