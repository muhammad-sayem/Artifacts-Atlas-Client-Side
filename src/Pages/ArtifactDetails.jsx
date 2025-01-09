import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/UseAuth';

const ArtifactDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [artifact, setArtifact] = useState({});
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const fetchLikedArtifacts = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked-artifacts/${user.email}`);
            return data.map(item => item.artifactId); 
        } 
        catch (err) {
            console.error('Error fetching liked artifacts:', err);
            return [];
        }
    };

    useEffect(() => {
        fetchArtifactData();
        checkIfLiked();
    }, [id]);

    const fetchArtifactData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`);
            setArtifact(data);
        } 
        catch (err) {
            console.error('Error fetching artifact data:', err);
        }
    };

    const checkIfLiked = async () => {
        const likedArtifacts = await fetchLikedArtifacts();
        setLiked(likedArtifacts.includes(id)); 
    };

    const handleLikeToggle = async () => {
        try {
            if (liked) {
                await axios.post(`${import.meta.env.VITE_API_URL}/remove-like`, {artifactId: id, likedEmail: user.email});

                setArtifact(prev => ({ ...prev, likes: prev.likes - 1 }));
                Swal.fire({
                    title: 'Removed from liked artifacts',
                    icon: 'success'
                });
            } else {
                const likedData = {
                    artifactId: id,
                    likedEmail: user.email,
                    artifactName: artifact.artifactName,
                    artifactImage: artifact.artifactImage,
                    artifactType: artifact.artifactType,
                    historicalContext: artifact.historicalContext,
                    createdAt: artifact.createdAt,
                    discoveredAt: artifact.discoveredAt,
                    presentLocation: artifact.presentLocation,
                    adderName: artifact.adderName,
                    adderEmail: artifact.adderEmail
                };
                await axios.post(`${import.meta.env.VITE_API_URL}/add-like`, likedData);
                setArtifact(prev => ({ ...prev, likes: prev.likes + 1 }));
                Swal.fire({
                    title: 'Added to liked artifacts',
                    icon: 'success'
                });
            }
            setLiked(!liked);
        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong!',
                icon: 'error'
            });
        }
    };

    return (
        <div className='w-2/3 mx-auto mb-8'>
            <h2 className='text-4xl text-center font-black my-8'>
                Details of <span className='text-[#F19100]'>{artifact.artifactName}</span>
            </h2>

            <div className='flex gap-x-8 p-12 shadow-2xl'>
                <div className='w-1/2'>
                    <h2 className='text-4xl font-extrabold text-[#F19100]'>{artifact.artifactName}</h2>
                    <p className='text-2xl font-bold mb-6'>Artifact Type: {artifact.artifactType}</p>
                    <h2 className='text-xl font-bold'>Historical Context:</h2>
                    <p className='mb-4'>{artifact.historicalContext}</p>
                    <p className='text-lg font-bold'>Created At: {artifact.createdAt}</p>
                    <p className='text-lg font-bold'>Discovered At: {artifact.discoveredAt}</p>
                    <p className='text-lg font-bold'>Added By: {artifact.adderName}</p>
                    <p className='text-lg font-bold'>Added By (Email): {artifact.adderEmail}</p>
                    <p className='text-lg font-bold'>Likes: {artifact.likes}</p>

                    <button
                        onClick={handleLikeToggle}
                        disabled={user.email === artifact.adderEmail}
                        className={`mt-6 btn w-1/3 text-xl font-bold ${liked ? 'bg-red-500' : 'bg-[#F19100]'}`}
                    >
                        <AiFillLike /> {liked ? 'Unlike' : 'Like'}
                    </button>
                </div>

                <div className='w-1/2 flex flex-col justify-center'>
                    <img src={artifact.artifactImage} alt={artifact.artifactName} className='h-[400px] w-full' />
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetails;
