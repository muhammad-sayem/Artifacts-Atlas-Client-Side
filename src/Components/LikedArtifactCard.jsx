import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const LikedArtifactCard = ({ artifact }) => {
    const { _id, artifactId, artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, presentLocation, adderName, adderEmail } = artifact;

    const [artifacts, SetArtifacts] = useState([]);

    useEffect(() => {
        fetchAllArtifacts();
    }, []);

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
        SetArtifacts(data);
    }

    const matchedArtifact = artifacts.find(artifact => artifact._id === artifactId);
    console.log(matchedArtifact);

    // console.log(likes);
    return (
        <div className='mx-auto rounded-xl'>
            <div className="card bg-base-100 shadow-xl dark:border-2 dark:border-[#F19100]">
                <figure className="px-5 pt-5">
                    <img
                        src={artifactImage}
                        alt="Image of the artifacts"
                        className="rounded-xl h-[300px] w-full" />
                </figure>

                <div className="card-body p-5">
                    <h2 className="card-title font-extrabold text-xl lg:text-2xl dark:text-[#F19100]"> {artifactName} </h2>
                    <p className='dark:text-white'>{`${historicalContext.slice(0, 90)}...`}</p>
                    <p className='text-md lg:text-lg font-bold dark:text-white'> Present Location: {presentLocation} </p>
                    <p className='text-lg font-bold dark:text-[#F19100]'> Likes: {matchedArtifact ? matchedArtifact.likes : <LoadingSpinner></LoadingSpinner>} </p>
                    <Link to={`/details/${artifactId}`}>
                        <button className="btn bg-[#F19100] text-lg font-bold text-md dark:text-black dark:hover:text-[#F19100]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LikedArtifactCard;