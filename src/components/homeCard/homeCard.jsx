import React from 'react';

const HomeCard = ({ data }) => {
    return (
        <div
            style={{
                background: data.background,
            }}
            className="h-[300px] w-[520px] rounded-md shadow-lg cursor-pointer"
        >
            <div className="h-3/4 overflow-hidden">
                <img src={data.svg} alt="" className="ml-14 my-5" />
            </div>

            <div className="h-1/4 bg-white px-8 rounded-b-md shadow-lg ">
                <h1 className="text-[28px] font-bold">{data.title}</h1>
                <p className="text-xs text-gray-500">{data.paragraph}</p>
            </div>
        </div>
    );
};

export default HomeCard;
