import React from "react";


const Tag =({name}) =>{
    return(
        <div className="bg-white rounded-lg text-xs text-black font-semibold px-[1rem] py-[0.1rem] ">
            {name}
        </div>
    )
}

export default Tag