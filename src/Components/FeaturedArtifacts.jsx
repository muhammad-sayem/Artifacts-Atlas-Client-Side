import axios from "axios";
import { useEffect, useState } from "react";
import ArtifactCard from "./ArtifactCard";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const FeaturedArtifacts = () => {
    const [artifacts, SetArtifacts] = useState([]);

    const [featuredArtifactsText] = useTypewriter({
        words: ['Artifacts'],
        loop: 0
    })

    useEffect(() => {
        fetchAllArtifacts();
    }, []);

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
        SetArtifacts(data);
    }

    return (
        <div className='w-11/12 mx-auto py-10' data-aos="fade-up"
        data-aos-duration="2000">

            <h2 className='text-4xl text-center font-black dark:mb-6'> 
                <span className="text-black dark:text-white"> Featured </span>
                <span className="text-[#F19100]"> {featuredArtifactsText}<Cursor></Cursor> </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {
                    artifacts.map(artifact => <ArtifactCard
                        key={artifact._id}
                        artifact={artifact}
                    ></ArtifactCard>)
                }
            </div>

            <div className="text-center">
                <Link to='/artifacts'>
                    <button className="btn w-full bg-[#F19100] text-lg font-bold dark:text-black dark:hover:text-[#F19100] dark:border-2 dark:border-black">View All</button>
                </Link>
            </div>

        </div>
    );
};

export default FeaturedArtifacts;