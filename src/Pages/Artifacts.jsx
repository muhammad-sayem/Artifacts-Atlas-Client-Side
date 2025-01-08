import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../Components/ArtifactCard';

const Artifacts = () => {
    const [artifacts, SetArtifacts] = useState([]);

    useEffect(() => {
        fetchAllArtifacts();
    }, []);

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
        SetArtifacts(data);
    }

    return (
        <div className='py-10'>
            <h2 className='text-4xl text-center font-black mb-8'> All <span className='text-[#F19100]'>Artifacts</span> </h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6'>

                {
                    artifacts.map(artifact => <ArtifactCard
                        key={artifact._id}
                        artifact={artifact}
                    ></ArtifactCard>)
                }
            </div>
        </div>
    );
};

export default Artifacts;