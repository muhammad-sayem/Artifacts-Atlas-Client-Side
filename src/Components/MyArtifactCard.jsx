import React from 'react';
import { Link } from 'react-router-dom';

const MyArtifactCard = ({ artifact }) => {
    const { _id, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, presentLocation, adderName, adderEmail, likes } = artifact
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
                    <h2 className="card-title font-extrabold text-3xl "> {artifactName} </h2>
                    <p>{`${historicalContext.slice(0, 90)}...`}</p>
                    <p className='text-lg font-bold'> Present Location: {presentLocation} </p>
                    <p className='text-lg font-bold'> Likes: {likes} </p>
                    <div className='space-x-2'>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-[#F19100] text-white text-md">Update</button>
                        </Link>

                        <button className="btn bg-red-500 text-white text-md">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyArtifactCard;