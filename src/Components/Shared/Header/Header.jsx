import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../Utilities/AuthProvider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header className='backdrop-blur-sm bg-black/30 shadow-sm mb-[-65px]'>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/colleges'}>Colleges</Link></li>
                            <li><Link to={'/admission'}>Admission</Link></li>
                            <li><Link to={'/my-college'}>My College</Link></li>
                        </ul>
                    </div>
                    <Link to={"/"} className=" text-xl text-white">Campus Connect</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/colleges'}>Colleges</Link></li>
                        <li><Link to={'/admission'}>Admission</Link></li>
                        <li><Link to={'/my-college'}>My College</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <Link to={'/profile'} className="btn btn-outline text-white hover:bg-zinc-900">{user?.displayName}</Link>
                    ) : (
                        <Link to={"/login"} className="btn">Student Login</Link>
                    )}

                </div>
            </div>
        </header>
    );
};

export default Header;