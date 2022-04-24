import React, { useState } from 'react';
import {
    RiChinaRailwayLine,
    RiBankFill,
    RiBookmark2Fill,
    RiBriefcaseFill,
    RiLogoutBoxLine,
} from 'react-icons/ri';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import gsap from 'gsap';

const SideNav = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open);
        if (open === true) {
            gsap.to('.sideBar', { width: '40px', paddingLeft: '0' });
        } else {
            gsap.to('.sideBar', { width: '240px', paddingLeft: '8px' });
        }
    };

    return (
        <div
            className="sideBar h-[100vh] w-[240px] bg-[#282944]
                    text-white fixed overflow-hidden pl-2 pt-20
                    flex flex-col justify-between"
        >
            {open ? (
                <HiChevronDoubleLeft
                    size={30}
                    onClick={handleOpen}
                    className="cursor-pointer"
                />
            ) : (
                <HiChevronDoubleRight
                    size={30}
                    onClick={handleOpen}
                    className="cursor-pointer"
                />
            )}
            <section className="space-y-2 mb-20">
                <div
                    className="flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiChinaRailwayLine className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Parcours</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiBankFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Exercices</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiBookmark2Fill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Cours</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiBriefcaseFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Carriere</div>
                </div>
            </section>
            <div
                className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
            >
                <RiLogoutBoxLine className="fixed" size={30} />
                <div className="txt text-2xl ml-10 ">Deconnexion</div>
            </div>
        </div>
    );
};

export default SideNav;
