
import{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountriesDetailsPage() {
    const [touristSpot, setTouristSpot] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchTouristSpotDetails();
    }, [id]);

    const fetchTouristSpotDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/tourist-spots/${id}`);
            const data = await response.json();
            setTouristSpot(data);
        } catch (error) {
            console.error('Error fetching tourist spot details:', error);
        }
    };

    return (
        <div>
            <h1>Tourist Spot Details</h1>
            <h2>{touristSpot.tourists_spot_name}</h2>
            <p>Country: {touristSpot.country_Name}</p>
            <p>Location: {touristSpot.location}</p>
            <p>Description: {touristSpot.description}</p>
            <p>Average Cost: {touristSpot.average_cost}</p>
            <p>Seasonality: {touristSpot.seasonality}</p>
        </div>
    );
}

export default CountriesDetailsPage;
