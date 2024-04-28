
import { useLoaderData } from 'react-router-dom';

function CountriesDetailsPage() {
    const countryCardData = useLoaderData();
    const { image, name, email, spotName, countryName, description, averageCost, totalVisitorsPerYear, travelTime, seasonality, location } = countryCardData;

    return (
        <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center items-center  w-full ">
                <img
                    src={image} alt="" className=" flex  h-96 w-full md:px-20 rounded-lg justify-center items-center" />
                <div className='mt-6 flex justify-between text-start  text-xl font-bold  items-start '>
                    <div className="">
                        Average Cost: <span className="text-red-500 ml-2 ">{averageCost}</span>
                    </div>
                    <div className=" ml-6  lg:ml-12 ">
                        Country Name: <span className="text-red-500 ml-2 ">{countryName}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:justify-center space-y-2 p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                <h1 className="text-3xl font-bold leading-none sm:text-4xl mb-10">{spotName}</h1>
                <p
                    className="lg:my-3 mt-2 text-lg ">
                    <span className="font-bold">Description:</span> <span className=" ml-2 ">{description}</span>

                </p>
                <p
                    className="lg:my-3 mt-2 text-lg ">
                    <span className="font-bold">Email:</span> <span className=" ml-2 ">{email}</span>

                </p>
                <div className="lg:flex justify-between">
                    <p className=" text-lg font-bold ">
                        Name: <span className="text-red-500 ml-2 ">{name}</span>
                    </p>
                    <p className=" text-lg font-bold ">
                        TravelTime: <span className="text-red-500 ml-2 lg:mt-0 mt-2">{travelTime}</span>
                    </p>
                </div>
                <div className='lg:flex justify-between  '>
                    <p className=" text-start text-lg font-bold ">
                        Location: <span className="text-red-500 ml-2 ">{location}</span>
                    </p>
                    <p className=" text-start text-lg font-bold ">
                        Area: <span className="text-red-500 ml-2 lg:mt-0 mt-2 ">{seasonality}</span>
                    </p>

                </div>
                <p className=" text-start text-lg font-bold ">
                    Total Visitors Per Year: <span className="text-red-500 ml-2 lg:mt-0 mt-2 ">{totalVisitorsPerYear}</span>
                </p>
            </div>
        </div>
    );
}

export default CountriesDetailsPage;
