import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { TiWarning } from 'react-icons/ti';
const CustomBlock = ({ children, data }) => {
    switch (data.Type) {
        case 'Warning':
            return (
                <div>
                    <div className="bg-yellow-500 text-amber-900 p-5 relative rounded-md font-bold">
                        <div className="absolute -top-2 -left-2">
                            <TiWarning size={25} className="text-amber-900" />
                        </div>
                        {children}
                    </div>
                </div>
            );
        case 'GoodToKnow':
            return (
                <div>
                    <div className="bg-blue-100 text-blue-900 p-5 relative rounded-md font-bold">
                        <div className="absolute -top-2 -left-2">
                            <RiErrorWarningFill
                                size={25}
                                className="text-blue-400"
                            />
                        </div>
                        {children}
                    </div>
                </div>
            );
        // case 'Code':
        // <div>
        //     <div className="bg-gray-500 text-white p-5 relative rounded-md font-bold">
        //         <div className="absolute -top-2 -left-2">
        //             <TiWarning size={25} className="text-amber-900" />
        //         </div>
        //         {children}
        //     </div>
        // </div>;
        default:
            return <div>{children}</div>;
    }
};

export default CustomBlock;
