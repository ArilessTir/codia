import React from 'react';
import { useParams } from 'react-router';
import { career } from '../data/career';
import ArticleBlock from '../components/articleBlock/articleBlock';

const Job = () => {
    const { id } = useParams();
    const meta = career[id - 1]['Metadata'];
    const data = career[id - 1]['Data'];
    console.log(data);
    return (
        <section className="pt-20 md:pl-60 px-5  max-w-7xl mx-auto">
            <div className="">
                <h1 className="text-3xl font-bold"> {meta.Title} </h1>
                <div className="flex gap-4 my-2">
                    <h2>{meta.Author}</h2>
                    <h2>{meta.Date}</h2>
                </div>
                <img
                    className=" h-56 w-full object-cover rounded-md"
                    src={meta.Photo}
                    alt=""
                />
            </div>
            <article className="mt-8 max-w-3xl mx-auto flex flex-col ">
                {data.map((courses) => {
                    return <ArticleBlock data={courses} />;
                })}
            </article>
        </section>
    );
};

export default Job;
