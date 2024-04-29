import { Link, } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [spots, setsSpot] = useState([]);

    useEffect(() => {
        fetch(`https://y-ochre-six.vercel.app/tourists/email/${user.email}`)
            .then((res) => res.json())
            .then((data) => setsSpot(data))
    }, [user.email])

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
            <table className="table ">
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
                                            <Link to={`/update/${spot._id}`}>
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
        </div>
    );
};

export default MyList;