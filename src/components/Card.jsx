import { useState } from "react";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineStar,
    AiFillStar,
} from "react-icons/ai";
const Card = () => {
    const [toggleLike, setToggleLike] = useState(false);
    return (
        <div className='flex flex-col gap-1 capitalize py-5 w-[311.47px]'>
            <div className='relative flex w-[311.47px]  h-[200px] cursor-pointer'>
                <img
                    src=''
                    alt=''
                    className='bg-gray-400 container rounded-lg'
                />
                <div
                    className='absolute right-5 top-5 p-1 bg-white rounded-full text-xl'
                    onClick={() => setToggleLike((item) => (item = !item))}
                >
                    {!toggleLike ? <AiOutlineHeart /> : <AiFillHeart />}
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                    <p>wireless earbuds, ipx8</p>
                    <p>$ 89</p>
                </div>
                <p>wired sterio headset with mic</p>
                <div className='flex items-center gap-1'>
                    <p className='flex'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </p>
                    <p>(120)</p>
                </div>
                <button className='py-1 px-3 border hover:text-white border-none outline outline-1 outline-black hover:outline-green-700 active:outline-green-900  hover:bg-green-700 active:bg-green-900 border-black w-fit rounded-full'>
                    add to cart
                </button>
            </div>
        </div>
    );
};
export default Card;
