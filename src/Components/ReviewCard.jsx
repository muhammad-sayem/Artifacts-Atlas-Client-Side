import React from 'react';
import reviewer1 from "../assets/images/reviewer1.webp";
import reviewer2 from "../assets/images/reviewer2.webp";
import reviewer3 from "../assets/images/reviewer3.jpg";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

const ReviewCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer1} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#F19100] text-2xl font-bold my-2'> Jack Leo </h2>
                <p className='text-center dark:text-white'> Artifacts Atlas is a great resource for history enthusiasts. Its easy navigation and detailed information deepen my understanding of ancient civilizations. A must-visit for history lovers! </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStarHalfStroke></FaRegStarHalfStroke>
                </div>
            </div>

            {/* ----------------- */}

            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer2} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#F19100] text-2xl font-bold my-2'> James Phill </h2>
                <p className='text-center dark:text-white'> I love how user-friendly Artifacts Atlas is. The ability to browse, like, and contribute to the collection makes it a truly engaging experience. It's a fascinating way to connect with the past! </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
            </div>

            {/* -------------- */}

            <div className='shadow-xl p-8 dark:border-2 border-[#F19100]' data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000">
                <div className='flex justify-center'>
                    <img src={reviewer3} className='w-16 h-16 rounded-full' alt="" />
                </div>
                <h2 className='text-center text-[#F19100] text-2xl font-bold my-2'> Andrew Martin </h2>
                <p className='text-center dark:text-white'> As a history lover, Artifacts Atlas is my go-to site for learning about ancient artifacts. The variety of entries and the educational insights make it a unique treasure trove of knowledge. </p>

                <p className='text-center font-bold my-2 text-lg dark:text-white dark:font-bold'> Rating </p>

                <div className='flex justify-center text-[#F19100]'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaRegStar></FaRegStar>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;