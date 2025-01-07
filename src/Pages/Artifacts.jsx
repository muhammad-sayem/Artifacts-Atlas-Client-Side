import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Artifacts = () => {
    const [artifacts, SetArtifacts] = useState([]);

    useEffect(()=>{
        fetchAllArtifacts();
    }, []);

    const fetchAllArtifacts = async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
        SetArtifacts(data);
    }

    return (
        <div>
            <h3> All Artifacts Page {artifacts.length} </h3>
        </div>
    );
};

export default Artifacts;