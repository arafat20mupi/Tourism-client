import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AddSpot from "../Pages/AddSpot";
import AllSpot from "../Pages/AllSpot";
import MyList from "../Pages/MyList";
import TouristsCardDetails from "../Components/TouristsCardDetails";
import PrivateRouter from "./PrivateRouter";
import Update from "../Components/Update";
import EroorPage from "../Pages/EroorPage";
import Countries from "../ExtraPage/Countries";
import CountriesCard from "../ExtraPage/CountriesCard";
import CountriesDetailsPage from "../ExtraPage/CountriesDetailsPage";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <EroorPage />,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                errorElement: <EroorPage />,
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
                errorElement: <EroorPage />,
                element: <Login></Login>
            },
            {
                path: "/signup",
                errorElement: <EroorPage />,
                element: <Signup></Signup>
            },
            {
                path: '/addSpot',
                errorElement: <EroorPage />,
                element: <AddSpot></AddSpot>
            },
            {
                path: '/allSpot',
                errorElement: <EroorPage />,
                element: <AllSpot></AllSpot>,
                loader: () => fetch('https://y-ochre-six.vercel.app/tourists'),
            },
            {
                path: "/update/:id",
                errorElement: <EroorPage />,
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://y-ochre-six.vercel.app/user/${params.id}`),
            },
            {
                path: '/myList',
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
                loader: () => fetch('https://y-ochre-six.vercel.app/user'),
            },
            {
                path: '/',
                element: <Countries></Countries>
            },
            {
                path:"/country_Name/:country_Name",
                element: <CountriesCard></CountriesCard>,
                loader: ({ params }) => fetch(`https://y-ochre-six.vercel.app/country_Name/${params.country_Name}`),
            },
            {
                path:'/country_Name/details/:id',
                element: <CountriesDetailsPage></CountriesDetailsPage>,
                loader: ({ params }) => fetch(`https://y-ochre-six.vercel.app/country/${params.id}`),
            }
        ]
    }
]);

export default router;