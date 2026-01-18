import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login_page from "../pages/Login_page";
import Signup_page from "../pages/Signup_page";

export const myRoutes = createBrowserRouter([
{
    path: "/",
    element: <HomePage/>,
},
{
    path: "/login",
    element: <Login_page/>,
},
{
    path: "/register",
    element: <Signup_page/>,
},
])