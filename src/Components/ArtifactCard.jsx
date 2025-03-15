import React from 'react';
import { Link } from 'react-router-dom';

const ArtifactCard = ({ artifact }) => {
    const { _id, artifactId, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, presentLocation, adderName, adderEmail, likes } = artifact;
    return (
        <div className='mx-auto rounded-xl'>
            <div className="card bg-base-100 shadow-xl dark:border-2 dark:border-[#F19100]">
                <figure className="px-5 pt-5">
                    <img
                        src={artifactImage}
                        alt="Image of the artifacts"
                        className="rounded-xl h-[250px] w-full" />
                </figure>

                <div className="card-body p-5">
                    <h2 className="font-extrabold text-xl lg:text-2xl dark:text-[#F19100]"> {artifactName} </h2>
                    <p className='dark:text-white'>{`${historicalContext.slice(0, 100)}...`}</p>
                    <p className='text-md lg:text-lg font-bold dark:text-white'> Present Location: {presentLocation} </p>
                    <p className='text-lg font-bold dark:text-[#F19100]'> Likes: {likes} </p>
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-[#F19100] text-lg font-bold text-md dark:text-black dark:border-2 dark:border-black">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;