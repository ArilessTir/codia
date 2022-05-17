import React from 'react';

const CoursesBlock = ({ data }) => {
    return (
        <section className="py-5">
            <h1 className="text-xl font-bold">{data.Title}</h1>
            <div>{data.Content}</div>
            <img src={data.Photo} />
        </section>
    );
};

export default CoursesBlock;
