import { useContext, useState } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
const Card = (props) => {
    const providedData = useContext(ContextProvider);
    const [toggleLike, setToggleLike] = useState(false);
    //adds the data to the favorites array
    const handleAddToFavorite = () => {
        providedData.setFav((item) => [...item, props.id]);
        setToggleLike(!toggleLike);
    };

    // filters out the data from the favorites array
    const handleRemoveFromFavorite = () => {
        const newFav = providedData.fav.filter((items) => items != props.id);
        providedData.setFav(newFav);
        setToggleLike(!toggleLike);
    };
    return (
        <div className='flex flex-col gap-1 capitalize py-5 w-[311.47px]'>
            <div className='relative flex w-[311.47px] h-[200px] cursor-pointer'>
                <img
                    src=''
                    alt=''
                    className='bg-gray-400 container rounded-lg'
                />
                <div
                    className='absolute flex justify-center items-center  right-3 top-3 p-1 text-white rounded-full text-3xl'
                    onClick={
                        !toggleLike
                            ? () => handleAddToFavorite()
                            : () => handleRemoveFromFavorite()
                    }
                >
                    {!toggleLike ? (
                        <ReactIcons.AiOutlineHeart />
                    ) : (
                        <ReactIcons.AiFillHeart />
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between font-bold'>
                    <p>wireless earbuds, ipx8</p>
                    <p>$ 89</p>
                </div>
                <p>wired sterio headset with mic</p>
                <div className='flex items-center gap-1'>
                    <p className='flex'>
                        <ReactIcons.AiFillStar />
                        <ReactIcons.AiFillStar />
                        <ReactIcons.AiFillStar />
                        <ReactIcons.AiFillStar />
                        <ReactIcons.AiOutlineStar />
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
