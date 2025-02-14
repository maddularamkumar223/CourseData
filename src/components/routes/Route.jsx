import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from './../auth/login/Login';
import Register from './../auth/register/Register';
import Course from "../course/Course";
import CreateCourse from "../course/CreateCourse";
import ViewCourse from "../course/viewCourse/ViewCourse";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/course',
                element:<Course/>
            },
            {
                path:'/createCourse',
                element:<CreateCourse/>
            },
            {
                path:`/viewCourse/:id`,
                element:<ViewCourse/>
            }
        ]
    }
])

export default router;