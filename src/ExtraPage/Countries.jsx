import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [data, setData, loading] = useState([]);

    useEffect(() => {
        fetch('https://y-ochre-six.vercel.app/country_Name')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    if (loading) {
        return <div className="  justify-center text-center flex items-center mt-40 w-full">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
            {
                data.slice(0, 6)?.map(country => <div key={country._id}>
                    <div className="w-full p-4 rounded-md shadow-md bg-violet-400 text-gray-800">
                        <div className="  ">
                            <img src={country.image} alt="" className="object-cover hover:scale-105 hover:duration-200 object-center w-full rounded-xl h-72 hover:delay-50" />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-lg font-bold">{country.description}</h1>
                        </div>
                        <Link to={`/country_Name/${country.countryName}`} className="flex  items-center justify-center text-white w-full p-3 font-semibold tracking-wide rounded-md  bg-indigo-800 ">{country.countryName} </Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Countries;