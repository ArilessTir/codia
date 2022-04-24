import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const NavBar = () => {
    return (
        <nav
            className="fixed bg-[#282944] h-14 flex justify-between items-center px-2
                        w-full shadow-xl z-50"
        >
            <div className="flex items-center space-x-10">
                <h1 className="text-[40px] text-white font-bold">Codia</h1>
                <div className="relative md:block hidden">
                    <AiOutlineSearch
                        className="absolute text-2xl transform left-0 top-1/2 
                                text-gray-500 -translate-y-1/2 "
                    />
                    <input
                        type="text"
                        className="rounded-md h-8 pl-10 w-72"
                        placeholder="Recherche sur codia"
                    />
                </div>
            </div>
            <div className=" h-10 w-10 rounded-full bg-yellow-500 md:block hidden"></div>
        </nav>
    );
};

export default NavBar;
