import React, { useEffect, useState } from "react";
import { ApplicationViews } from "./ApplicationViews";
import { HabitForm } from "./Habits/HabitForm";
import { NavBar } from "./nav/NavBar";
import { UsersList } from "./users/usersList";

export const Habits = () => {

    <>
        <NavBar />
        <Route path="/">
        <ApplicationViews />
      </Route>
    </>

}