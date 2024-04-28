import { Link, useLoaderData } from "react-router-dom";

const CountriesCard = () => {
    const countriesData = useLoaderData();
    console.log(countriesData);
    return (
        <div className="grid grid-cols-1 mt-3 lg:mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countriesData?.map(country => <div key={country._id}>
                    <div className="w-full  rounded-md shadow-md bg-gray-50 text-gray-800">
                        <div className="p-4  ">
                            <img src={country.image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                        </div>

                        <div className="flex flex-col justify-between p-6 space-y-4">
                            <div className="space-y-1 ">
                                <h2 className="text-3xl font-bold tracking-wide">Country Name: {country.countryName}</h2>
                                <p className=" text-xl text-black">Tourists Spot Name:  {country.spotName} </p>
                                <p className=" text-lg text-black">Average Cost :  ${country.averageCost} </p>
                                <h2 className="text-lg text-black">Total Visitors Per Year: {country.totalVisitorsPerYear}</h2>
                                <p className=" text-lg text-black">Travel Time : {country.travelTime} </p>
                                <p className=" text-lg text-black">Seasonality : {country.seasonality} </p>
                            </div>

                            <Link to={`/country_Name/details/${country._id}`} type="button" className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">View More</Link>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default CountriesCard;