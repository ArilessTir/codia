import React from 'react';
import { Link } from 'react-router-dom';

const CareerCard = ({ data }) => {
    return (
        <Link to={`${data.Id}`}>
            <div className=" h-80 w-[26rem] rounded-md shadow-lg cursor-pointer">
                <div className="h-3/4 overflow-hidden">
                    <img src={data.Photo} alt="" className="rounded-md" />
                </div>
                <div className="h-1/4 bg-white px-8 rounded-b-md shadow-lg ">
                    <h1 className="text-[28px] font-bold">{data.Title}</h1>
                    <p className="text-xs text-gray-500">{data.Date}</p>
                </div>
            </div>
        </Link>
    );
};

export default CareerCard;
