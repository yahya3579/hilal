import React from 'react'
import advertisementImage from '../../assets/advertisment2.png'
const Advertisement2 = () => {
    return (
        <div className="border-t-[3px]  border-red-600 mt-10">
            <div className="">
                <h3 className="heading-text-primary">ADVERTISEMENT</h3>
            </div>
            <div className="relative mt-6">
                <img
                    src={advertisementImage}
                    alt="Home interior advertisement"
                    className="w-[300px] h-[250px] object-cover"
                />

            </div>
        </div>
    )
}

export default Advertisement2