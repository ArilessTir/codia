import React from 'react';
import ExoCard from '../components/exoCard/exoCard';
import { data } from '../data/exercices';
const Exercices = () => {
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0">
            <h1 className="text-3xl font-bold my-5">Exercices</h1>
            <section className="flex gap-5 flex-wrap">
                {data.map((exo) => {
                    return <ExoCard data={exo} />;
                })}
            </section>
        </section>
    );
};

export default Exercices;
