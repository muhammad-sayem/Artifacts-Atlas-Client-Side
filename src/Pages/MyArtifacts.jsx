import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import ArtifactCard from "../Components/ArtifactCard";

const MyArtifacts = () => {
    const { user } = useAuth();
    const [artifacts, SetArtifacts] = useState([]);

    useEffect(() => {
        fetchAllArtifacts();
    }, [user]);

    const fetchAllArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user.email}`);
        SetArtifacts(data);
    }

    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                artifacts.map(artifact => <ArtifactCard
                    key={artifact._id}
                    artifact={artifact}
                ></ArtifactCard>)
            }
        </div>
    );
};

export default MyArtifacts;