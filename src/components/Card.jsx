import { useContext, useState } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
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
    const handleAddToCart = () => {
        const addCart = {
            Id: props.id,
            Color: props.color,
            Amount: 1,
        };
        providedData.setCart([...providedData.cart, addCart]);
    };

    return (
        <div
            className={`relative w-[330px] ${
                props.changeWidthOfCard && " md:w-auto md:flex-1"
            } flex flex-col gap-1 capitalize`}
        >
            <Link to={`/product/${props.id}`}>
                <div
                    className={`relative ${
                        !props.changeWidthOfCard && "w-[311px]"
                    } flex`}
                >
                    <img
                        src={props.image}
                        alt=''
                        loading='lazy'
                        className='bg-gray-400 container rounded-lg'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between font-bold'>
                        <p>wireless earbuds, ipx8</p>
                        <p>$ {props.price}</p>
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
                        <p>({props.reviews})</p>
                    </div>
                </div>
            </Link>
            <button
                onClick={handleAddToCart}
                className='py-1 px-3 border hover:text-white border-none outline outline-1 outline-black hover:outline-green-700 active:outline-green-900  hover:bg-green-700 active:bg-green-900 border-black w-fit rounded-full'
            >
                add to cart
            </button>

            <div
                className='absolute flex justify-center items-center  right-3 top-3 p-1 text-white rounded-full text-3xl cursor-pointer hover:text-orange-500'
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
    );
};
export default Card;
