import axios from "axios";
import { useEffect, useState } from "react";
import ArtifactCard from "./ArtifactCard";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
    const [artifacts, SetArtifacts] = useState([]);

    useEffect(() => {
        fetchAllArtifacts();
    }, []);

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
        SetArtifacts(data);
    }

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h2 className='text-4xl text-center font-black'> Featured <span className='text-[#F19100]'>Artifacts</span> </h2>

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
                    <button className="btn w-full bg-[#F19100] text-lg font-bold ">View All</button>
                </Link>
            </div>

        </div>
    );
};

export default FeaturedArtifacts;