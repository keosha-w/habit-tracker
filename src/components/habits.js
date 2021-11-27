import React, { useEffect, useState } from "react";
import { UsersList } from "./users/usersList";

export const Habits = () => {

    return (
        <>
            <h1>Habit Tracker</h1>
            <UsersList />
        </>
    )
}