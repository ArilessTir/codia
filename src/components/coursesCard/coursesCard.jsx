import React from 'react';
import Tag from '../tag/tag';
import book from '../../assets/svg/book.svg';
import { Link } from 'react-router-dom';

const CoursesCard = ({ data }) => {
    return (
        <Link
            to={`${data.Id}`}
            style={{
                background:
                    'linear-gradient(103.94deg, #50A0EA 0%, #34A85C 100%)',
                width: '271px',
                height: '135px',
            }}
            className="rounded-md flex flex-col relative cursor-pointer
                        justify-end items-start pl-3 pb-3 space-y-1"
        >
            <h1 className="text-white text-xl font-extrabold">{data.Title}</h1>
            <p className="text-white text-xs font-semibold">{data.Serie}</p>
            <Tag name="Cours" />
            <img className="absolute right-0 bottom-0" src={book} alt="" />
        </Link>
    );
};

export default CoursesCard;
