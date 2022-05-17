import React from 'react';
import { NavLink } from 'react-router-dom';
import job from '../assets/images/job.png';
import training from '../assets/images/training.png';
import path from '../assets/svg/path.svg';
import HomeCard from '../components/homeCard/homeCard';

const HomePage = () => {
    const cardData = [
        {
            title: 'Nos Cours',
            paragraph: 'Des parcours d’apprentissage sur mesure',
            svg: path,
            background: 'linear-gradient(101.92deg, #15C686 0%, #6C63FF 100%) ',
        },
        {
            title: 'Exerces toi',
            paragraph: 'Plonges toi dans notre catalogue d’exercices',
            svg: training,
            background: 'linear-gradient(101.92deg, #FFB8B8 0%, #A749BD 100%)',
        },
        {
            title: 'Carriere',
            paragraph: 'Retrouve nos conseil pour ta carriere',
            svg: job,
            background: 'linear-gradient(101.92deg, #50A0EA 0%, #6C63FF 100%)',
        },
    ];

    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0 mx-auto">
            <h1 className="text-3xl font-bold">Bienvue sur Codia</h1>
            <p className="text-[#BF2D85]">une nouvelle maniere d'apprendre</p>

            <div className=" mt-10">
                <h1 className="text-2xl font-bold my-5">
                    Construis-toi un socle de connaissance solide
                </h1>
                <div className="flex flex-wrap md:gap-5 gap-10">
                    <NavLink to={'/cours'}>
                        <HomeCard data={cardData[0]} />
                    </NavLink>
                    <NavLink to={'/exercices'}>
                        <HomeCard data={cardData[1]} />
                    </NavLink>
                </div>
            </div>

            <div className=" mt-14">
                <h1 className="text-2xl font-bold my-5">
                    Nos conseils pour ta carriere
                </h1>
                <div className="flex flex-wrap">
                    <NavLink to={'/carriere'}>
                        <HomeCard data={cardData[2]} />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
