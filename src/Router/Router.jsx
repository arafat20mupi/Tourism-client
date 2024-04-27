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
import Update from "../Components/Update";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://y-ochre-six.vercel.app/tourists'),
            },
            {
                path: '/tourists/:id',
                element: <PrivateRouter><TouristsCardDetails></TouristsCardDetails> </PrivateRouter>,
                loader: ({ params }) => fetch(`https://y-ochre-six.vercel.app/tourists/${params.id}`),
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
                loader: () => fetch('https://y-ochre-six.vercel.app/tourists'),
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://y-ochre-six.vercel.app/user/${params.id}`),
            },
            {
                path: '/myList',
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
                loader: () => fetch('https://y-ochre-six.vercel.app/user'),
            },
        ]
    }
]);

export default router;