import React from 'react';
import { courses } from '../data/courses';
const Courses = () => {
    console.log(courses[0]['Metadata']);
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0">
            <div>Cours</div>
        </section>
    );
};

export default Courses;
