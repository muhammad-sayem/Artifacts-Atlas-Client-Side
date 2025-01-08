import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddArtifacts = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <div> No user found </div>
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;

        const artifactName = form.artifactName.value;
        const artifactImage = form.artifactImage.value;
        const artifactType = form.artifactType.value;
        const historicalContext = form.historicalContext.value;
        const createdAt = form.createdAt.value;
        const discoveredAt = form.discoveredAt.value;
        const presentLocation = form.presentLocation.value;
        const adderName = form.adderName.value;
        const adderEmail = form.adderEmail.value;

        const formData = {
            artifactName,
            artifactImage,
            artifactType,
            historicalContext,
            createdAt,
            discoveredAt,
            presentLocation,
            adderName,
            adderEmail,
            likes: 0
        }
        console.log(formData);

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-artifact`, formData);
            form.reset();
            Swal.fire({
                title: "New Artifact Added Successfully!!",
                icon: "success"
            });
            navigate('/artifacts');
        }
        catch (err) {
            Swal.fire({
                title: "Something went wrong!!",
                icon: "error"
            });
        }
    }

    return (
        <div className="bg-black py-16 my-8 w-10/12 mx-auto">
            <h2 className="text-4xl text-center text-[#F19100] font-bold mb-8"> Add a Artifact </h2>

            <form onSubmit={handleSubmit}>
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
                            />
                        </div>


                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Type</p>
                            <select
                                name='artifactType'
                                id='category'
                                className='border p-2 rounded-md w-full'
                            >
                                <option value='Tools'>Tools</option>
                                <option value='Weapons'>Weapons</option>
                                <option value='Documents'>Documents</option>
                                <option value='Writings'>Writings</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Historical Context</p>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                name="historicalContext"
                                placeholder="Historical Context of the Artifact"
                                required
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
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Adder Name</p>
                            <input
                                type="text"
                                name="adderName"
                                value={user.displayName}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <p className='text-[#F19100] text-lg font-bold'>Artifact Adder Email</p>
                            <input
                                type="email"
                                name="adderEmail"
                                value={user.email}
                                disabled
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                    </div>
                </div>


                <div className="w-4/5 mx-auto">
                    <button className="btn w-full bg-[#F19100] text-white text-xl font-bold"> Add Artifact </button>
                </div>
            </form>
        </div>
    );
};

export default AddArtifacts;