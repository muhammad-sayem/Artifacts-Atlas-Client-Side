/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom'

const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {text}
                    </h1>
                    <br />
                    <NavLink
                        to='/artifacts'
                        className='w-full px-5 py-4 mt-4 text-lg font-semibold text-white capitalize transition-colors duration-300 transform bg-[#F19100] rounded-md lg:w-auto hover:bg-[#f6a62e] focus:outline-none focus:bg-[#f6a62e]'
                    >
                        View All Artifacts
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Slide