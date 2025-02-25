import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const touristDataUpdate = useLoaderData();
    console.log(touristDataUpdate);


    const { image, spotName, countryName, description, averageCost, totalVisitorsPerYear, travelTime, seasonality, location, } = touristDataUpdate;


    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = e.target;
        const name = data.name.value;
        const spotName = data.spotName.value;
        const countryName = data.countryName.value;
        const description = data.description.value;
        const location = data.location.value;
        const averageCost = data.averageCost.value;
        const seasonality = data.seasonality.value;
        const travelTime = data.travelTime.value;
        const totalVisitorsPerYear = data.totalVisitorsPerYear.value
        const image = data.image.value;
        const newTouristsData = {
            name, spotName, countryName, description, location, averageCost, travelTime, totalVisitorsPerYear, image, seasonality
        }
        try {
            const response = await fetch(`https://y-ochre-six.vercel.app/user/${touristDataUpdate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTouristsData)
            });

            if (!response.ok) {
                throw new Error('Failed to Update coffee');

            }

            Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });

        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center mt-8 text-4xl font-bold">Update Tourists Spot</h1>
            </div>
            <section className="p-6 ">
                <form onSubmit={handleUpdate} className="container w-full max-w-4xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-200">
                    <div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Tourists Spot Name</label>
                                <input type="text" defaultValue={spotName} name="spotName" placeholder="Your Tourists Spot Name" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Country Name</label>
                                <select name="countryName" className="w-full text-gray-700 p-2 rounded-lg select-bordered join-item " defaultValue={countryName}>
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
                                <input type="text" defaultValue={description} name="description" placeholder="Your Short Description" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                            <div className="w-full ml-2">
                                <label > location</label>
                                <input type="text" defaultValue={location} name="location" placeholder="Your  location" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Average Cost
                                </label>
                                <input type="number" defaultValue={averageCost} name="averageCost" placeholder="Average Cost" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Seasonality</label>
                                <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Travel Time</label>
                                <input defaultValue={travelTime} type="text" name="travelTime" placeholder="Travel Time" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                            <div className="w-full ml-2">
                                <label >Total Visitors Per Year</label>
                                <input type="number" defaultValue={totalVisitorsPerYear} name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-full ">
                                <label >Image</label>
                                <input type="text" name="image" defaultValue={image} placeholder="Your Photo Url" required className="p-2 w-full rounded focus:outline-none focus:ring focus:ring-opacity-25   " />
                            </div>

                        </div>
                    </div>


                    <div className="modal-action justify-center">
                        <button type="submit" className=" bg-gray-800  rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring   text-white">
                            Update Tourists Spot
                        </button>
                        <Link to={'/myList'} type="button" className=" bg-gray-800 text-white rounded p-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring ">
                            Back To My List
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;