import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviewsText] = useTypewriter({
        words: ['Reviews'],
        loop: 0
    });

    return (
        <div className='w-11/12 mx-auto mb-16'>
            <div className='w-1/4 mx-auto border-2 border-[#F19100] mb-6'></div>
            <h2 className='text-4xl text-center font-black mb-8'>
                <span className="text-black dark:text-white"> User </span>
                <span className="text-[#F19100]"> {reviewsText}<Cursor></Cursor> </span>
            </h2>

            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;