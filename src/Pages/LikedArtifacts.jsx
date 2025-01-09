import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import sorryImage from "../assets/images/sorry.png";
import ArtifactCard from '../Components/ArtifactCard';

const LikedArtifacts = () => {
    const { user, loading, setLoading } = useAuth();
    const [likedArtifacts, SetLikedArtifacts] = useState([]);

    useEffect(() => {
        fetchAllLikedArtifacts();
    }, []);

    const fetchAllLikedArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked-artifacts/${user.email}`);
        SetLikedArtifacts(data);
    }

    return (
        <div className='w-11/12 mx-auto'>
            {
                likedArtifacts.length !== 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            likedArtifacts.map(artifact => <ArtifactCard
                                key={artifact._id}
                                artifact={artifact}
                            ></ArtifactCard>)
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