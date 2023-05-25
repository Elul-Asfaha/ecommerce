import { useContext, useState } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
const Card = ({ id, color, image, price, name, reviews, rating, amount }) => {
    const providedData = useContext(ContextProvider);
    const [toggleLike, setToggleLike] = useState(false);
    const cartCollectionRef = collection(db, "cart");
    const wishlistCollectionRef = collection(db, "wishlist");

    const cardDetails = {
        color: color,
        id: id,
        image: image,
        price: price,
        model_name: name,
        reviews: reviews,
        rating: rating,
        amount: amount,
    };

    //adds the data to the favs database then sets a new fav array to be mapped through
    const handleSubmitFav = async () => {
        try {
            await addDoc(wishlistCollectionRef, cardDetails);
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    };

    // filters out the data from the favorites array

    const handleAddToCart = async () => {
        try {
            await addDoc(cartCollectionRef, cardDetails);
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    };

    const handleAddToRecentlyViewed = async () => {
        const recentlyViewedCOllection = collection(db, "recentlyviewed");
        try {
            await addDoc(recentlyViewedCOllection, cardDetails);
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    };

    return (
        <div
            className={`relative min-w-[320px] sm:min-w-fit sm:w-[40%] md:max-w-[330px] flex flex-col gap-1 capitalize`}
        >
            <Link
                to={`/product/${id}`}
                onClick={() => handleAddToRecentlyViewed()}
            >
                <div className={`relative flex`}>
                    <img
                        src={image[0]}
                        alt=''
                        loading='lazy'
                        className='bg-gray-300 cover rounded-lg min-w-[320px] sm:min-w-full md:w-full min-h-[209px]'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between font-bold'>
                        <p>wireless earbuds, ipx8</p>
                        <p>$ {price}</p>
                    </div>
                    <p>wired sterio headset with mic</p>
                    <div className='flex items-center gap-1 text-xl font-bold'>
                        <p className='flex' key={id}>
                            {rating >= 1 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {rating >= 2 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {rating >= 3 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {rating >= 4 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {rating == 5 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                        </p>
                        <p>({reviews})</p>
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
