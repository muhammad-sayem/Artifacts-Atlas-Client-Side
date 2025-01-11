import React from 'react';
import bannerImage from "../assets/images/ancient artifacts.webp"

const AboutArtifacts = () => {
    return (
        <div className='w-11/12 mx-auto lg:flex gap-x-8 space-y-4 mb-16'>
            <div className='lg:w-1/2 flex flex-col justify-center' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <img src={bannerImage} alt="" className='w-full h-[400px]' />
            </div>

            <div className='lg:w-1/2 text-center lg:text-left' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className='w-1/3 mx-auto lg:mx-0 border-2 border-[#F19100] mb-6'> </div>
                <h2 className='text-2xl lg:text-3xl font-semibold mb-8'> WELCOME TO  <span className='text-[#F19100]'>ARTIFACTS ATLAS</span> </h2>

                <div>
                    <h2 className='text-4xl lg:text-6xl font-black mb-8'> About The Mystery of <br /> <span className=''>Historical Artifacts</span> </h2>

                    <p> Historical artifacts are more than just remnants of the past; they are gateways to understanding the mysteries of human civilization. Each artifact holds a story, often shrouded in intrigue and speculation, waiting to be deciphered. From the enigmatic carvings of ancient tablets to the sophisticated engineering of tools like the Antikythera Mechanism, these objects reveal the ingenuity, culture, and beliefs of their creators. They bridge the gap between history and mythology, offering glimpses into the lives of those who shaped our world. However, the true allure of historical artifacts lies in their unanswered questions. Who crafted them? What purpose did they serve? Why were they lost or hidden? Exploring these mysteries fuels our quest for knowledge and deepens our connection to the rich tapestry of human heritage. </p>
                </div>
            </div>
        </div>
    );
};

export default AboutArtifacts;