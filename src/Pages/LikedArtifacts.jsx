import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import sorryImage from "../assets/images/sorry.png";
import LoadingSpinner from '../Components/LoadingSpinner';
import LikedArtifactCard from '../Components/LikedArtifactCard';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const LikedArtifacts = () => {
    const { user } = useAuth();
    const [likedArtifacts, SetLikedArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [featuredArtifactsText] = useTypewriter({
        words: ['Artifacts'],
        loop: 0
    })

    useEffect(() => {
        fetchAllLikedArtifacts();
    }, []);

    const fetchAllLikedArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked-artifacts/${user.email}`, { withCredentials: true });
        SetLikedArtifacts(data);
        setLoading(false);
    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='w-11/12 mx-auto my-12' data-aos="fade-up"
            data-aos-duration="3000">
            <h2 className='text-4xl text-center font-black'>
                <span className="text-black"> Liked </span>
                <span className="text-[#F19100]"> {featuredArtifactsText}<Cursor></Cursor> </span>
            </h2>

            {
                likedArtifacts.length !== 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            likedArtifacts.map(artifact => <LikedArtifactCard
                                key={artifact._id}
                                artifact={artifact}
                            ></LikedArtifactCard>)
                        }
                    </div>
                    :
                    <div>
                        <img src={sorryImage} alt="" className='mx-auto' />
                        <h3 className='text-6xl text-[#F19100] text-center font-bold my-8'> No Data Availavble Here </h3>
                    </div>
            }
        </div>
    );
};

export default LikedArtifacts;