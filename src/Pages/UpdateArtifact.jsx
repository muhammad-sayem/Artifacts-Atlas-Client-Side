import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import axios from 'axios';

const UpdateArtifact = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [artifact, setArtifact] = useState(null); // Initialize as null
    const navigate = useNavigate();

    useEffect(() => {
        fetchArtifactData();
    }, [id]);

    const fetchArtifactData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`);
            setArtifact(data); 
        } catch (error) {
            console.error("Error fetching artifact data:", error);
        }
    };

    if (!artifact) {
        return (
            <div className="text-center py-16">
                <p className="text-2xl text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-black py-16 my-8 w-10/12 mx-auto">
            <h2 className="text-4xl text-center text-[#F19100] font-bold mb-8">
                Update {artifact.artifactName}
            </h2>

            <form>
                <div className="w-4/5 mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-4">
                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Name</p>
                            <input
                                type="text"
                                name="artifactName"
                                placeholder="Artifact Name"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.artifactName}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Image</p>
                            <input
                                type="text"
                                name="artifactImage"
                                placeholder="Artifact Image"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.artifactImage}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Type</p>
                            <select
                                name="artifactType"
                                id="category"
                                className="border p-2 rounded-md w-full"
                                defaultValue={artifact.artifactType} 
                            >
                                <option value="Tools">Tools</option>
                                <option value="Weapons">Weapons</option>
                                <option value="Documents">Documents</option>
                                <option value="Writings">Writings</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Historical Context</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="historicalContext"
                                placeholder="Historical Context of the Artifact"
                                required
                                defaultValue={artifact.historicalContext}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Created At</p>
                            <input
                                type="text"
                                name="createdAt"
                                placeholder="Created at"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.createdAt}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Discovered At</p>
                            <input
                                type="text"
                                name="discoveredAt"
                                placeholder="Discovered at"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.discoveredAt}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Discovered By</p>
                            <input
                                type="text"
                                name="discoveredBy"
                                placeholder="Discovered By"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.discoveredBy}
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Present Location</p>
                            <input
                                type="text"
                                name="presentLocation"
                                placeholder="Present Location"
                                className="input input-bordered w-full"
                                required
                                defaultValue={artifact.presentLocation}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-4/5 mx-auto">
                    <button className="btn w-full bg-[#F19100] text-white text-xl font-bold">
                        Update Artifact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateArtifact;
