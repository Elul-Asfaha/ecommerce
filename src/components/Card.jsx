import { useContext, useState } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
const Card = (props) => {
    const providedData = useContext(ContextProvider);
    const [toggleLike, setToggleLike] = useState(false);
    const cardDetails = {
        color: props.color,
        id: props.id,
        image: props.image,
        price: props.price,
        model_name: props.name,
        reviews: props.reviews,
        rating: props.rating,
    };

    //adds the data to the favs database then sets a new fav array to be mapped through
    const handleSubmitFav = () => {
        fetch("/ecommerce/favs", {
            method: "POST",
            body: JSON.stringify(cardDetails),
        })
            .then((res) => res.json())
            .then((res) => providedData.setFavs(res))
            .catch((err) => console.error(err));
    };

    // filters out the data from the favorites array

    const handleAddToCart = () => {
        fetch("/ecommerce/cart", {
            method: "POST",
            body: JSON.stringify(cardDetails),
        })
            .then((res) => res.json())
            .then((res) => providedData.setCart(res))
            .catch((err) => console.error(err));
    };

    const handleAddToRecentlyViewed = () => {
        fetch("/ecommerce/recentlyviewed", {
            method: "POST",
            body: JSON.stringify(cardDetails),
        })
            .then((res) => res.json())
            .then((res) => providedData.setRecentlyViewed(res))
            .catch((err) => console.error(err));
    };

    return (
        <div
            className={`relative md:w-auto w-[337.5px] md:min-w-[280px] md:max-w-[330px] flex flex-col gap-1 capitalize`}
        >
            <Link
                to={`/product/${props.id}`}
                onClick={() => handleAddToRecentlyViewed()}
            >
                <div className={`relative flex`}>
                    <img
                        src={props.image[0]}
                        alt=''
                        loading='lazy'
                        className='bg-gray-300 cover rounded-lg w-[337.5px] min-h-[209px]'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between font-bold'>
                        <p>wireless earbuds, ipx8</p>
                        <p>$ {props.price}</p>
                    </div>
                    <p>wired sterio headset with mic</p>
                    <div className='flex items-center gap-1 text-xl font-bold'>
                        <p className='flex' key={1}>
                            {props.rating >= 1 ? (
                                <ReactIcons.AiFillStar className='text-green-800' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {props.rating >= 2 ? (
                                <ReactIcons.AiFillStar className='text-green-800' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {props.rating >= 3 ? (
                                <ReactIcons.AiFillStar className='text-green-800' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {props.rating >= 4 ? (
                                <ReactIcons.AiFillStar className='text-green-800' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {props.rating == 5 ? (
                                <ReactIcons.AiFillStar className='text-green-800' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                        </p>
                        <p>({props.reviews})</p>
                    </div>
                </div>
            </Link>
            <button
                onClick={() => handleAddToCart()}
                className='py-1 px-3 border hover:text-white border-none outline outline-1 outline-black hover:outline-green-700 active:outline-green-900  hover:bg-green-700 active:bg-green-900 border-black w-fit rounded-full'
            >
                add to cart
            </button>

            <button
                className='absolute flex justify-center items-center  right-3 top-3 p-1 text-white rounded-full text-3xl cursor-pointer hover:text-orange-500'
                onClick={() => handleSubmitFav()}
            >
                <ReactIcons.AiOutlineHeart />
            </button>
        </div>
    );
};
export default Card;
