import { Link, NavLink } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const HandleSignOut = () => {
        signOutUser()
        toast.success("Logout Succesfully", {
            position: "top-center",
            autoClose: 1000
        });
    }
    const Navlinks = <>
        <li> <NavLink>Home</NavLink></li>
        <li> <NavLink>All Spot</NavLink></li>
        {
            user && <li> <NavLink>ADD Spot</NavLink></li>
        }
        {
            user && <li> <NavLink>My List</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>

                <a className="btn btn-ghost text-lg font-bold"><FaPlaneDeparture /> Turio</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={HandleSignOut} className="btn">Log Out</button> :
                        <Link to="/login" >
                            <button type="submit" className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;