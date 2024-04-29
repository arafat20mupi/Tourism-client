import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsCard from "../Components/TouristsCard";
import { Helmet } from "react-helmet-async";

const AllSpot = () => {
    const allTouristsSpot = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc");
    const sortByAverageCost = (spots, order) => {
        return spots.slice().sort((a, b) => {
            if (order === "asc") {
                return a.averageCost - b.averageCost;
            } else {
                return b.averageCost - a.averageCost;
            }
        });
    };
    const sortedTouristsSpot = sortByAverageCost(allTouristsSpot, sortOrder);
    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <div>
            <Helmet>
                <title>Turio/All-Tourist-Spots</title>
            </Helmet>
            <div className="mb-4">
                <label htmlFor="sort">Sort by Average Cost:</label>
                <select
                    id="sort"
                    className="ml-2 p-2"
                    value={sortOrder}
                    onChange={toggleSortOrder}
                >
                    <option value="asc">Lowest to Highest</option>
                    <option value="desc">Highest to Lowest</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedTouristsSpot.map((tourist) => (
                    <TouristsCard key={tourist._id} tourist={tourist} ></TouristsCard>
                ))}
            </div>
        </div>
    );
};

export default AllSpot;
