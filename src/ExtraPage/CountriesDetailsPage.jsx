
import { useLoaderData } from 'react-router-dom';

function CountriesDetailsPage() {
    const countryCardData = useLoaderData();
    const { image, name, email, spotName, countryName, description, averageCost, totalVisitorsPerYear, travelTime, seasonality, location } = countryCardData;

    return (
        <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center items-center  w-full ">
                <img data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    src={image} alt="" className=" flex  h-96 w-full md:px-20 rounded-lg justify-center items-center" />
                <div className='mt-6 lg:flex lg:justify-between text-start  text-xl font-bold  items-start '>
                    <div data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out" className="flex">
                        Average Cost: <span className="text-red-500 ml-2 ">{averageCost}</span>
                    </div>
                    <div data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        className="flex ml-6  lg:ml-12 ">
                        <span>Country Name:</span> <span className="text-red-500 ml-2 ">{countryName}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:justify-center space-y-2 p-6  rounded-sm lg:max-w-md xl:max-w-lg ">
                <h1 data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out" className="text-3xl font-bold leading-none sm:text-4xl mb-10">{spotName}</h1>
                <p data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out"
                    className="lg:my-3 mt-2 text-lg ">
                    <span data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        className="font-bold">Description:</span> <span className=" ml-2 ">{description}</span>

                </p>
                <p data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    className="lg:my-3 mt-2 text-lg ">
                    <span className="font-bold">Email:</span> <span className=" ml-2 ">{email}</span>

                </p>
                <div data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    className="lg:flex justify-between">
                    <p className=" text-lg font-bold ">
                        Name: <span className="text-red-500 ml-2 ">{name}</span>
                    </p>
                    <p className=" text-lg font-bold ">
                        TravelTime: <span className="text-red-500 ml-2 lg:mt-0 mt-2">{travelTime}</span>
                    </p>
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    className='lg:flex justify-between  '>
                    <p className=" text-start text-lg font-bold ">
                        Location: <span className="text-red-500 ml-2 ">{location}</span>
                    </p>
                    <p className=" text-start text-lg font-bold ">
                        Area: <span className="text-red-500 ml-2 lg:mt-0 mt-2 ">{seasonality}</span>
                    </p>

                </div>
                <p data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    className=" text-start text-lg font-bold ">
                    Total Visitors Per Year: <span className="text-red-500 ml-2 lg:mt-0 mt-2 ">{totalVisitorsPerYear}</span>
                </p>
            </div>
        </div>
    );
}

export default CountriesDetailsPage;
