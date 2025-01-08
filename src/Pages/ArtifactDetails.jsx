import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ArtifactDetails = () => {
    const { id } = useParams();
    const [artifact, setArtifact] = useState([]);

    useEffect(() => {
        fetchArtifactData();
    }, [id]);

    const fetchArtifactData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`);
        setArtifact(data);
    }

    console.log(artifact);
    return (
        <div className='w-2/3 mx-auto mb-8'>
            <h2 className='text-4xl text-center font-black my-8'> Details of <span className='text-[#F19100]'> {artifact.artifactName} </span> </h2>

            <div className='flex gap-x-8 p-12 shadow-2xl'>
                <div className='w-1/2'>
                    <h2 className='text-4xl font-extrabold text-[#F19100]'> {artifact.artifactName} </h2>
                    <p className='text-2xl font-bold mb-6'> Artifact Type: {artifact.artifactType} </p>
                    <h2 className='text-xl font-bold'> Historical Context: </h2>
                    <p className='mb-4'> {artifact.historicalContext} </p>
                    <p className='text-lg font-bold'> Created At: {artifact.createdAt} </p>
                    <p className='text-lg font-bold'> Discovered At: {artifact.discoveredAt} </p>
                    <p className='text-lg font-bold'> Added By: {artifact.adderName} </p>
                    <p className='text-lg font-bold'> Added By (Email): {artifact.adderEmail} </p>
                    <p className='text-lg font-bold'> Likes: {artifact.likes} </p>

                    <button className='mt-6 btn w-1/3 text-xl bg-[#F19100] font-bold'> <AiFillLike></AiFillLike> Like </button>
                </div>

                <div className='w-1/2 flex flex-col justify-center'>
                    <img src={artifact.artifactImage} alt="" className='h-[400px] w-full' />
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;