import React from 'react';
import { courses } from '../data/courses';
import CoursesCard from '../components/coursesCard/coursesCard';

const Courses = () => {
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0">
            <h1 className="text-3xl font-bold my-5">Cours</h1>
            <section className="flex gap-5 flex-wrap">
                {courses.map((meta) => {
                    return (
                        <CoursesCard
                            data={meta['Metadata']}
                            key={meta['Metadata'].Id}
                        />
                    );
                })}
            </section>
        </section>
    );
};

export default Courses;
