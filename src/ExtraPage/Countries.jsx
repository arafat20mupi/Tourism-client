import { useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countryData, setCountryData] = useState(null); // State to store fetched country data

    // Function to fetch data for a specific country
    const fetchData = async (countryName) => {
        try {
            const response = await fetch(`/extra?country_Name=${countryName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch country data');
            }
            const data = await response.json();
            setCountryData(data);
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/BLHBQz7/images-3.jpg' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Bangladesh, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" onClick={() => fetchData('Bangladesh')} className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Bangladesh
                </button>
            </div>
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/Lt0B6q3/shutterstock-RF-433429591.jpg' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Vietnam, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Vietnam
                </button>

            </div>
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/ZMgw7rK/thailand-vacation-1698745589.jpg' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Thailand, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Thailand
                </button>

            </div>
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/BCMjHHt/1692611693226.jpg' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Cambodia, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Cambodia
                </button>

            </div>
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/zNhySks/Mount-Bromo-volcanoes-Semeru-Indonesia-Java.webp' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Indonesia, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Indonesia
                </button>

            </div>
            <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                <div className="  ">
                    <img src='https://i.ibb.co/tCP0YMq/1586001658-2-jpg.webp' alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                </div>
                <div className="mt-4">
                    <h1 className="text-lg font-bold">Malaysia, situated in Southeast Asia.</h1>
                </div>
                <button
                    // to={`/tourists/${_id}`} 
                    type="button" className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">Malaysia
                </button>
            </div>
        </div>
    );
};

export default Countries;