import React, { useState } from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import gsap from 'gsap';

const SideNav = () => {
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open);
        if (open === true) {
            gsap.to('.sideBar', { width: '60px' });
        } else {
            gsap.to('.sideBar', { width: '240px' });
        }
    };

    return (
        <div className="sideBar h-[100vh] w-[240px] bg-slate-500 fixed overflow-hidden">
            <h1 className="text-4xl text-left mb-20">Codia</h1>
            <section className="space-y-10 flex flex-col">
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white rounded-md h-12"
                >
                    <AiFillAccountBook className="fixed" size={50} />
                    <div className="txt text-3xl ml-20">Exercices</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white rounded-md h-12"
                >
                    <AiFillAccountBook className="fixed" size={50} />
                    <div className="txt text-3xl ml-20">Exercices</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white rounded-md h-12"
                >
                    <AiFillAccountBook className="fixed" size={50} />
                    <div className="txt text-3xl ml-20">Exercices</div>
                </div>
                <div
                    className=" flex items-center cursor-pointer
                                hover:bg-white rounded-md h-12"
                >
                    <AiFillAccountBook className="fixed" size={50} />
                    <div className="txt text-3xl ml-20">Exercices</div>
                </div>
            </section>
            <button
                onClick={handleOpen}
                className="w-full text-left text-4xl mt-10"
            >
                X
            </button>
        </div>
    );
};

export default SideNav;
