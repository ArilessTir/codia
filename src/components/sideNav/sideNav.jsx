import React, { useState } from 'react';
import {
    RiChinaRailwayLine,
    RiBankFill,
    RiFileCodeFill,
    RiBriefcaseFill,
    RiLogoutBoxLine,
    RiQuestionFill,
    RiBook2Fill,
} from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open);
        if (open === true) {
            gsap.to('.sideBar', { width: '35px', paddingLeft: '0' });
        } else {
            gsap.to('.sideBar', { width: '200px', paddingLeft: '8px' });
        }
    };

    return (
        <div
            className="sideBar h-[100vh] w-[200px] bg-[#282944]
                    text-white fixed overflow-hidden pl-2 pt-20
                    md:flex flex-col justify-between hidden"
        >
            {open ? (
                <HiChevronDoubleLeft
                    size={30}
                    onClick={handleOpen}
                    className="cursor-pointer hover:bg-white hover:text-[#282944] rounded-md"
                />
            ) : (
                <HiChevronDoubleRight
                    size={30}
                    onClick={handleOpen}
                    className="cursor-pointer hover:bg-white  hover:text-[#282944] rounded-md"
                />
            )}
            <section className="space-y-2 mb-20">
                <NavLink
                    to={'/parcours'}
                    className="flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <RiChinaRailwayLine className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Parcours</div>
                </NavLink>
                <NavLink
                    to={'/exercices'}
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <RiFileCodeFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Exercices</div>
                </NavLink>
                <NavLink
                    to={'/cours'}
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <RiBook2Fill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Cours</div>
                </NavLink>
                <NavLink
                    to={'/quizz'}
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <RiQuestionFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Quizz</div>
                </NavLink>
                <NavLink
                    to={'/projets'}
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <AiFillProject className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Projets</div>
                </NavLink>
                <NavLink
                    to={'/carriere'}
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
                >
                    <RiBriefcaseFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Carriere</div>
                </NavLink>
            </section>
            <div
                className=" flex items-center cursor-pointer
                                hover:bg-white hover:bg-opacity-30 hover:border-r-[3px] h-12"
            >
                <RiLogoutBoxLine className="fixed" size={30} />
                <div className="txt text-2xl ml-10 ">Deconnexion</div>
            </div>
        </div>
    );
};

export default SideNav;
