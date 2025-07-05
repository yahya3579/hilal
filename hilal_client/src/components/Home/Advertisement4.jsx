import React from 'react';
import advertisementImage from '../../assets/advertisment4.png';

const Advertisement4 = () => {
    return (
        <div className="w-[80%] mx-auto my-6">
            <img
                src={advertisementImage}
                alt="Home interior advertisement"
                className="mx-auto max-w-full h-[90px] object-cover"
            />
        </div>
    );
};

export default Advertisement4;
