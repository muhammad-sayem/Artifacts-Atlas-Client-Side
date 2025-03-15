import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import logo from "../assets/images/artifact-icon.png"
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handeSignOut = () => {
        signOutUser();
        navigate('/login');
    }
    return (
        <div className='navbar sticky top-0 z-10 bg-base-100 shadow-sm container mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='gap-2 items-center'>
                    <div className='flex items-center gap-x-2'>
                        <img className='w-12 h-12 mx-auto' src={logo} alt='' />
                        <span className='font-bold text-md md:text-xl dark:text-white'>Artifacts Atlas</span>
                    </div>
                </Link>
            </div>
            <div className='flex-none dark:text-white'>
                <ul className='menu menu-horizontal px-1 text-md'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/artifacts'>All Artifacts</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/add-artifacts' className='justify-between'>
                                    Add Artifacts
                                </Link>
                            </li>
                            <li>
                                <Link to='/my-artifacts'>My Artifacts</Link>
                            </li>
                            <li>
                                <Link to='/liked-artifacts'>Liked Artifacts</Link>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={handeSignOut}
                                    className='bg-gray-200 block text-center dark:bg-black dark:text-white dark:font-bold'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar