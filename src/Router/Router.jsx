import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import AddSpot from "../Pages/AddSpot";
import AllSpot from "../Pages/AllSpot";
import MyList from "../Pages/MyList";
import TouristsCardDetails from "../Components/TouristsCardDetails";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/tourists'),
            },
            {
                path: '/tourists/:id',
                element: <PrivateRouter><TouristsCardDetails></TouristsCardDetails> </PrivateRouter>, 
                loader: ({params}) => fetch(`http://localhost:5000/tourists/${params.id}`),
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
                element: <AllSpot></AllSpot>,
                loader: () => fetch('http://localhost:5000/tourists'),
            },
            {
                path: '/deleteSpot',
            },
            {
                path: '/updateSpot',
            },
            {
                path: 'myList',
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
                loader: () => fetch('http://localhost:5000/user'),
            }
        ]
    }
]);

export default router;