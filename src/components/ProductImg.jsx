import { useState } from "react";

const ProductImg = ({ details }) => {
    const [imgSwitch, setImgSwitch] = useState(details[0].image[0]);
    return (
        <>
            <div className='flex max-h-[700px]'>
                <img
                    src={
                        imgSwitch &&
                        `https://source.unsplash.com/1700x${
                            Math.random() * (1080 - 700) + 700
                        }?headphone`
                    }
                    loading='lazy'
                    className='cover'
                    alt=''
                />
            </div>
            <div className='grid grid-cols-4 gap-2 max-h-[200px]'>
                {details[0].image.map((item, index) => (
                    <img
                        src={
                            item &&
                            `https://source.unsplash.com/1700x${
                                Math.random() * (1080 - 700) + 700
                            }?headphone`
                        }
                        loading='lazy'
                        className='container flex-1 hover:scale-110'
                        alt=''
                    />
                ))}
            </div>
        </>
    );
};
export default ProductImg;
