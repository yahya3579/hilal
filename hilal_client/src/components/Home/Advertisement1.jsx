import React from 'react'
import advertisementImage from '../../assets/advertisment2.png'
const Advertisement1 = () => {
    return (

        <div className="relative mb-12 px-2">
            <img
                src={advertisementImage}
                alt="Home interior advertisement"
                className="w-[300px] h-[250px] object-cover"
            />

        </div>

    )
}

export default Advertisement1