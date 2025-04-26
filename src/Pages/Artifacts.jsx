import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ArtifactCard from '../Components/ArtifactCard';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Artifacts = () => {
    const [artifacts, setArtifacts] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const [featuredArtifactsText] = useTypewriter({
        words: ['Artifacts'],
        loop: 0
    });

    useEffect(() => {
        const fetchAllArtifacts = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-artifacts?search=${search}&sort=${sort}`);
            setArtifacts(data);
        };
        fetchAllArtifacts();
    }, [search, sort]);

    console.log(sort);
    
    return (
        <div className='py-10 mx-auto min-h-screen'>
            <h2 className='text-4xl text-center font-black mb-8'>
                <span className="text-black dark:text-white"> All </span>
                <span className="text-[#F19100]"> {featuredArtifactsText}<Cursor /></span>
            </h2>

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-3/4 lg:w-2/3 mx-auto'>
                <div className='flex items-center w-full md:w-3/4 p-1 border-4 border-[#F19100] rounded-lg overflow-hidden focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='flex-grow px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Artifact Name to Search'
                        aria-label='Enter Artifact Name'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    {/* <button className='px-6 py-3 text-sm tracking-wider font-black uppercase transition-colors duration-300 transform bg-[#F19100] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none dark:text-black'>
                        Search
                    </button> */}
                </div>

                <select
                    className='p-4 border-2 border-[#F19100] rounded-lg text-gray-700 outline-none focus:ring focus:ring-[#F19100] focus:ring-opacity-50 w-full md:w-1/4 text-lg font-bold dark:text-[#F19100]'
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                >
                    <option value="" disabled>Sort By Likes</option>
                    <option value="asc">Least Liked</option>
                    <option value="desc">Most Liked</option>
                </select>
            </div>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12' data-aos="fade-up" data-aos-duration="3000">
                {artifacts.map(artifact => (
                    <ArtifactCard key={artifact._id} artifact={artifact} />
                ))}
            </div>
        </div>
    );
};

export default Artifacts;
