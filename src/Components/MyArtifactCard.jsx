import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtifactCard = ({ artifact, fetchAllMyArtifacts }) => {
    const { _id, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, presentLocation, adderName, adderEmail, likes } = artifact;
    const navigate = useNavigate();

    const handleDelete = (id) => {
        try {
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
                    axios.delete(`${import.meta.env.VITE_API_URL}/artifact/${_id}`, {withCredentials:true}),
                    Swal.fire({
                        title: `${artifactName} has been deleted successfully!`,
                        icon: "success"
                    });
                    fetchAllMyArtifacts();
                    navigate('/artifacts');
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='mx-auto rounded-xl'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img
                        src={artifactImage}
                        alt="Image of the artifacts"
                        className="rounded-xl h-[300px] w-full" />
                </figure>

                <div className="card-body p-5">
                    <h2 className="card-title font-extrabold text-2xl "> {artifactName} </h2>
                    <p>{`${historicalContext.slice(0, 90)}...`}</p>
                    <p className='text-lg font-bold'> Present Location: {presentLocation} </p>
                    <p className='text-lg font-bold'> Likes: {likes} </p>
                    <div className='space-x-2'>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-[#F19100] text-white text-md">Update</button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white text-md">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyArtifactCard;