import { Link, } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import RobotAnimation from "../ExtraPage/RobotAnimation";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setsSpot] = useState([]);

    useEffect(() => {
        fetch(`https://y-ochre-six.vercel.app/user/email/${user.email}`)
            .then((res) => res.json())
            .then((data) => setsSpot(data))
    }, [user.email])



    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     const data = e.target;
    //     const name = data.name.value;
    //     const spotName = data.spotName.value;
    //     const countryName = data.countryName.value;
    //     const description = data.description.value;
    //     const location = data.location.value;
    //     const averageCost = data.averageCost.value;
    //     const seasonality = data.seasonality.value;
    //     const travelTime = data.travelTime.value;
    //     const totalVisitorsPerYear = data.totalVisitorsPerYear.value
    //     const image = data.image.value;

    //     const newTouristsData = {
    //         name, spotName, countryName, description, location, averageCost, travelTime, totalVisitorsPerYear, image, seasonality
    //     }
    //     try {
    //         const response = await fetch(`https://y-ochre-six.vercel.app/user/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newTouristsData)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to Update coffee');

    //         }

    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Coffee Updated successfully',
    //             icon: 'success',
    //             confirmButtonText: 'Cool'
    //         });

    //     } catch (error) {
    //         console.error('Error:', error);
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'Something went wrong. Please try again later.',
    //             icon: 'error',
    //             confirmButtonText: 'OK'
    //         });
    //     }
    // };


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://y-ochre-six.vercel.app/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Coffee has been deleted.",
                                "success"
                            )
                        }
                        const remainingSpot = spots.filter(spot => spot._id !== id);
                        setsSpot(remainingSpot)
                    })
            }
        });
    }

    return (
        <div className="overflow-x-auto ">
            <Helmet>
                <title>Turio/MyList</title>
            </Helmet>
            {
                spots.length === 0 ? <div>
                    <RobotAnimation></RobotAnimation>
                </div> : <table className="table ">
                    <thead >
                        <tr >
                            <th>Name</th>
                            <th>Country Name</th>
                            <th>Location</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spots.map(spot => {
                                return (
                                    <tr key={spot._id}>

                                        <td>{spot.name}</td>
                                        <td>{spot.countryName}</td>
                                        <td>{spot.location}</td>
                                        <td >
                                            <div>
                                                <Link to={`/user/${spot._id}`} >
                                                    <button className="bg-[#E3B577] hover:bg-[#ab8554] text-white btn  ">
                                                        Update
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(spot._id)}
                                                    className="btn lg:ml-3 btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }

        </div>
    );
};

export default MyList;