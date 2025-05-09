import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import MyArtifactCard from "../Components/MyArtifactCard";
import sorryImage from "../assets/images/sorry.png"
import LoadingSpinner from "../Components/LoadingSpinner";
import { Cursor, useTypewriter } from 'react-simple-typewriter';


const MyArtifacts = () => {
    const { user } = useAuth();
    const [myArtifacts, SetMyArtifacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [featuredArtifactsText] = useTypewriter({
        words: ['Artifacts'],
        loop: 0
    })

    useEffect(() => {
        fetchAllMyArtifacts();
    }, [user]);

    const fetchAllMyArtifacts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user.email}`, {withCredentials:true});
        SetMyArtifacts(data);
        setLoading(false);
    }

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='w-11/12 mx-auto' data-aos="fade-up"
        data-aos-duration="3000">
            <h2 className='text-4xl text-center font-black my-8'> 
                <span className="text-black dark:text-white"> My </span>
                <span className="text-[#F19100]"> {featuredArtifactsText}<Cursor></Cursor> </span>
            </h2>
            {
                myArtifacts.length !== 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12'>
                        {
                            myArtifacts.map(artifact => <MyArtifactCard
                                key={artifact._id}
                                artifact={artifact}
                                fetchAllMyArtifacts={fetchAllMyArtifacts}
                            ></MyArtifactCard>)
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

export default MyArtifacts;