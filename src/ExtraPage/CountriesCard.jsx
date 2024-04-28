import { useLoaderData } from "react-router-dom";

const CountriesCard = () => {
   const Countries = useLoaderData()
   console.log(Countries);
        return (
            <div>
                <h1>see more {Countries.length} </h1>
            </div>
        );
    };

    export default CountriesCard;