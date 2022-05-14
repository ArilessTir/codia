import React from 'react';
import { courses } from '../data/courses';
const Courses = () => {
    const meta = courses[0]['Metadata'];
    const data = courses[0]['Data'];
    console.log(data);
    return (
        <section className="pt-20 md:pl-60 px-5 sm:px-0 max-w-7xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold"> {meta.Title} </h1>
                <div className="flex gap-4">
                    <h2>{meta.Author}</h2>
                    <h2>{meta.Date}</h2>
                    <div className="w-full h-32">
                        <img src={meta.Photo} alt="" />
                    </div>
                </div>
            </div>
            <article className="mt-8 max-w-3xl mx-auto flex flex-col gap-8">
                <section>
                    <h1 className="text-xl font-bold">{data[0].Title}</h1>
                    <div>{data[0].Content}</div>
                </section>
                <section>
                    <h1 className="text-xl font-bold">{data[0].Title}</h1>
                    <div>{data[1].Content}</div>
                </section>
                <section>
                    <h1 className="text-xl font-bold">{data[0].Title}</h1>
                    <div>{data[2].Content}</div>
                </section>
            </article>
        </section>
    );
};

export default Courses;
