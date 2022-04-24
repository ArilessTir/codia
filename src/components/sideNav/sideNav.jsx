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
                    className="cursor-pointer hover:bg-white hover:text-[#282944] rounded-md"
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
                    <RiFileCodeFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Exercices</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiBook2Fill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10">Cours</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <RiQuestionFill className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Quizz</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white hover:text-[#282944] rounded-md h-12"
                >
                    <AiFillProject className="fixed" size={30} />
                    <div className="txt text-2xl ml-10 ">Projets</div>
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
