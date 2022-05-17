import React from 'react';
import CustomBlock from '../customBlock/customBlock';
const ArticleBlock = ({ data }) => {
    return (
        <section className="py-5">
            <h1 className="text-xl font-bold py-3">{data.Title}</h1>
            <CustomBlock type={data.Type}>{data.Content}</CustomBlock>
            <img src={data.Photo} />
        </section>
    );
};

export default ArticleBlock;
