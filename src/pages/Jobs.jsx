import React from 'react';
import CareerCard from '../components/careerCard/careerCard';
import { career } from '../data/career';

const Jobs = () => {
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0">
            <h1 className="text-3xl font-bold my-5">
                Retrouve nos conseils pour ta carriere
            </h1>
            <div className="flex flex-wrap gap-5">
                {career.map((meta) => {
                    return (
                        <CareerCard
                            data={meta['Metadata']}
                            key={meta['Metadata'].Id}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Jobs;
