import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../Components/ArtifactCard';

const Artifacts = () => {
    const [artifacts, SetArtifacts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAllArtifacts = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-artifacts?search=${search}`);
            SetArtifacts(data);
        }
        fetchAllArtifacts();
    }, [search]);



    return (
        <div className='py-10 w-11/12 mx-auto'>
            <h2 className='text-4xl text-center font-black mb-8'> All <span className='text-[#F19100]'>Artifacts</span> </h2>

            <div className='flex items-center p-1 overflow-hidden rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 border-4 border-[#F19100] w-1/2 mx-auto'>
                <input
                    className='flex-grow px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                    type='text'
                    name='search'
                    placeholder='Enter Artifact Name'
                    aria-label='Enter Artifact Name'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />

                <button className='px-1 md:px-4 py-3 text-sm tracking-wider font-black uppercase transition-colors duration-300 transform bg-[#F19100] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                    Search
                </button>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

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