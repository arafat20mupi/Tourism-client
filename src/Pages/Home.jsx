import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import TouristsCard from "../Components/TouristsCard";
import OurTeam from "../Components/OurTeam";
import FeadBack from "../Components/FeadBack";
import Countries from "../ExtraPage/Countries";
import { Helmet } from "react-helmet-async";
import {useTypewriter ,Cursor } from "react-simple-typewriter"

const Home = () => {
    const tourists = useLoaderData();
    const [typeEffect] = useTypewriter({
        words: ['Tourist Spots'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 100,
        backSpeed: 40,
        backDelay: 1000,
        cursor: true,
    })
    const [typeEffect2] = useTypewriter({
        words: ['Countries'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 100,
        backSpeed: 40,
        backDelay: 1000,
        cursor: true,
    })
    return (
        <div className="">
            <Helmet>
                <title>Turio/Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div className="flex flex-col mt-6 lg:mt-24 justify-center items-center ">
                <h2 className="text-3xl  font-bold tracking-wide"> All  {typeEffect}</h2>
            </div>
            <div className="grid grid-cols-1 mt-3 lg:mt-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tourists.slice(0, 6).map(tourist => <TouristsCard key={tourist._id} tourist={tourist}></TouristsCard>)
                }
            </div>
            <div className="flex flex-col mt-6 lg:mt-24 justify-center items-center ">
                <h2 className="text-3xl  font-bold tracking-wide"> All {typeEffect2} </h2>
            </div>
            <div className="mt-3 lg:mt-12">
                <Countries></Countries>
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