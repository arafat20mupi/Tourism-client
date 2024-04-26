/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TouristsCard = ({ tourist }) => {
    const { image, spotName, averageCost, totalVisitorsPerYear, travelTime, seasonality } = tourist;
    return (
        <div className="w-full  rounded-md shadow-md bg-gray-50 text-gray-800">
            <div className="p-4  ">
            <img src={image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
            </div>
            
            <div className="flex flex-col justify-between p-6 space-y-8">

                <div className="space-y-2 ">
                    <h2 className="text-2xl font-bold tracking-wide">Tourists Spot Name: {spotName}</h2>
                    <p className=" text-xl text-black">Average Cost : {averageCost} </p>
                    <h2 className="text-xl text-black">Total Visitors Per Year: {totalVisitorsPerYear}</h2>
                    <p className=" text-xl text-black">Travel Time : {travelTime} </p>
                    <p className=" text-xl text-black">Seasonality : {seasonality} </p>
                </div>

                <Link type="button" className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">View Property</Link>
            </div>
        </div>
    );
};

export default TouristsCard;