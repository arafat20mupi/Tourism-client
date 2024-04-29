import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddSpot = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const email = data.email.value;
        const spotName = data.spotName.value;
        const countryName = data.countryName.value;
        const description = data.description.value;
        const location = data.location.value;
        const averageCost = data.averageCost.value;
        const seasonality = data.seasonality.value;
        const travelTime = data.travelTime.value;
        const totalVisitorsPerYear = data.totalVisitorsPerYear.value
        const image = data.image.value;
        console.log(name, email, spotName, countryName, description, location, averageCost, travelTime, totalVisitorsPerYear, image, seasonality);
        const newTourists = {
            name, email, spotName, countryName, description, location, averageCost, travelTime, totalVisitorsPerYear, image, seasonality
        }
        fetch('https://y-ochre-six.vercel.app/tourists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTourists)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Add Tourists Spot Succesfully", {
                    position: "top-center",
                    autoClose: 1000
                });
            })



        fetch('https://y-ochre-six.vercel.app/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTourists)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center text-4xl font-bold">Add Tourists Spot</h1>
            </div>
            <section className="p-6 dark:text-gray-800">
                <form onSubmit={handleSubmit} className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Name</label>
                                <input type="text" id="userName" name="name" disabled defaultValue={user?.displayName} placeholder="Your Name" required className="p-2 w-full rounded focus:outline-none focus:ring bg-slate-400 focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Email</label>
                                <input type="text" name="email" defaultValue={user?.email} disabled placeholder="Your name" required className="p-2 w-full rounded bg-slate-400 focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Tourists Spot Name</label>
                                <input type="text" name="spotName" placeholder="Your Tourists Spot Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">

                                <label >Country Name</label>
                                <select name="countryName" className="w-full text-gray-700 p-2 rounded-lg select-bordered join-item ">
                                    <option disabled selected>Selact Country</option>
                                    <option>Bangladesh</option>
                                    <option>Thailand</option>
                                    <option>Indonesia</option>
                                    <option>Malaysia</option>
                                    <option>Vietnam</option>
                                    <option>Cambodia</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Short Description</label>
                                <input type="text" name="description" placeholder="Your Short Description" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label > location</label>
                                <input type="text" name="location" placeholder="Your  location" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Average Cost
                                </label>
                                <input type="number" name="averageCost" placeholder="Average Cost" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Seasonality</label>
                                <input type="text" name="seasonality" placeholder="Seasonality" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Travel Time</label>
                                <input type="text" name="travelTime" placeholder="Travel Time" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Total Visitors Per Year</label>
                                <input type="number" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Image</label>
                                <input type="text" name="image" placeholder="Your Photo Url" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 " />
                            </div>

                        </div>
                    </div>

                    <button type="submit" className="w-full bg-gray-800 text-white rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-violet-600 dark:text-white">
                        Add Tourists Spot
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddSpot;