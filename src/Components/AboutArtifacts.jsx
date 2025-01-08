import React from 'react';
import bannerImage from "../assets/images/ancient artifacts.webp"

const AboutArtifacts = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-x-4'>
            <div className='w-1/2 border-2'>
                <img src={bannerImage} alt="" className='w-full' />
            </div>

            <div className='w-1/2 border-2'>
                <div className='w-1/3 border-2 border-[#F19100] mb-6'> </div>
                <h2 className='text-3xl font-semibold mb-8'> WELCOME TO  <span className='text-[#F19100]'>ARTIFACTS ATLAS</span> </h2>

                <div>
                    <h2 className='text-6xl font-black mb-8'> About The Mystery of <br /> <span className=''>Historical Artifacts</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default AboutArtifacts;