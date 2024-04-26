import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TouristsCard from "../Components/TouristsCard";

const Home = () => {
    const tourists = useLoaderData()
    console.log(tourists);
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <div className="flex flex-col justify-center items-center ">
                <h2 className="text-3xl  font-bold tracking-wide"> All Tourist Spots</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tourists.slice(0, 6).map(tourist => <TouristsCard key={tourist._id} tourist={tourist}></TouristsCard>)
                }
            </div>
        </div>
    );
};

export default Home;