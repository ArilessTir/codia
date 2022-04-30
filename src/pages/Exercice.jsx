import React from 'react';
import { useParams } from 'react-router';
import { data } from '../data/exercices';
import { AiFillGithub } from 'react-icons/ai';
const Exercice = () => {
    const { id } = useParams();
    const exo = data[id - 1];
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0">
            <h1 className="text-3xl font-bold my-5"> {exo.name} </h1>

            <div className=" my-5">
                <h1 className="text-xl font-bold"> Description</h1>
                <p>{exo.description}</p>
            </div>
            <div className=" my-5">
                <h1 className="text-xl font-bold"> Instruction </h1>
                <p>{exo.instruction}</p>
            </div>
            <div className="flex items-center space-x-2">
                <AiFillGithub size={20} />
                <a href={exo.github} target="_blank" className="cursor-pointer">
                    Repo de l'exo
                </a>
            </div>
        </section>
    );
};

export default Exercice;
