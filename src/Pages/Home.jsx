import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TouristsCard from "../Components/TouristsCard";
import OurTeam from "../Components/OurTeam";
import FeadBack from "../Components/FeadBack";

const Home = () => {
    const tourists = useLoaderData();
    return (
        <div className="">
            <div>
                <Banner></Banner>
            </div>
            <div className="flex flex-col mt-6 lg:mt-24 justify-center items-center ">
                <h2 className="text-3xl  font-bold tracking-wide"> All Tourist Spots</h2>
            </div>
            <div className="grid grid-cols-1 mt-3 lg:mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tourists.slice(0, 6).map(tourist => <TouristsCard key={tourist._id} tourist={tourist}></TouristsCard>)
                }
            </div>
            <div className="mt-6 lg:mt-24">
                <OurTeam></OurTeam>
            </div>
            <div className="mt-6 lg:mt-24">
                <FeadBack></FeadBack>
            </div>
        </div>
    );
};

export default Home;