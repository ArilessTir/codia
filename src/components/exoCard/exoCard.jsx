import React from 'react';
import Tag from '../tag/tag';
import python from '../../assets/svg/python.svg';
import { Link } from 'react-router-dom';

const ExoCard = ({ data }) => {
    return (
        <Link
            to={`${data.id}`}
            style={{
                background:
                    'linear-gradient(103.94deg, #965BE2 0%, #A749BD 39.58%, #BF2D85 100%, #BF2D85 100%)',
                width: '271px',
                height: '135px',
            }}
            className="rounded-md flex flex-col relative cursor-pointer
                        justify-end items-start pl-3 pb-3 space-y-1"
        >
            <h1 className="text-white text-xl font-extrabold">{data.name}</h1>
            <p className="text-white text-xs font-semibold">
                {data.technology}
            </p>
            <Tag name="Exercice" />
            <img className="absolute right-0 bottom-0" src={python} alt="" />
        </Link>
    );
};

export default ExoCard;
