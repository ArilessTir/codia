import React from 'react';

const HomeCard = ({ data }) => {
    return (
        <div
            style={{
                background: data.background,
            }}
            className="h-[19rem] md:w-[32rem] sm:w-[29rem] w-[22rem] rounded-md shadow-lg cursor-pointer"
        >
            <div className="h-3/4 overflow-hidden relative">
                <img
                    src={data.svg}
                    alt=""
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            <div className="h-1/4 bg-white px-8 rounded-b-md shadow-lg ">
                <h1 className="text-[28px] font-bold">{data.title}</h1>
                <p className="text-xs text-gray-500">{data.paragraph}</p>
            </div>
        </div>
    );
};

export default HomeCard;
