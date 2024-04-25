import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddSpot from "../Pages/AddSpot";
import AllSpot from "../Pages/AllSpot";
import MyList from "../Pages/MyList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: '/addSpot',
                element: <AddSpot></AddSpot>
            },
            {
                path: '/allSpot',
                element: <AllSpot></AllSpot>
            },
            {
                path: '/deleteSpot',
            },
            {
                path: '/updateSpot',
            },
            {
                path: 'myList',
                element: <MyList></MyList>
            }
        ]
    }
]);

export default router;