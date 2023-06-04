import { useState } from "react";

const ProductImg = ({ details }) => {
    const [imgSwitch, setImgSwitch] = useState(details[0].image[0]);
    return (
        <>
            <div className='flex max-h-[700px]'>
                <img src={imgSwitch} alt='' loading='lazy' className='cover' />
            </div>
            <div className='grid grid-cols-4 gap-2 max-h-[200px]'>
                {details[0].image.map((item, index) => (
                    <img
                        src={item && item}
                        alt=''
                        loading='lazy'
                        className='container flex-1 hover:scale-110'
                        key={index}
                        onClick={() => setImgSwitch(item)}
                    />
                ))}
            </div>
        </>
    );
};
export default ProductImg;
