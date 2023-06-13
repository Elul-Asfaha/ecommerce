import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import RatingComponent from "./Ratingcomponent";
const Card = ({ id, color, image, price, name, reviews, rating, amount }) => {
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
        const wishlistCollectionRef = collection(db, "wishlist");

        try {
            await addDoc(wishlistCollectionRef, cardDetails);
        } catch (err) {
            console.error(err);
        }
        location.reload();
    };

    // filters out the data from the favorites array

    const handleAddToCart = async () => {
        const cartCollectionRef = collection(db, "cart");

        try {
            await addDoc(cartCollectionRef, cardDetails);
        } catch (err) {
            console.error(err);
        }

        location.reload();
    };

    const handleAddToRecentlyViewed = async () => {
        const recentlyViewedCOllection = collection(db, "recentlyviewed");
        try {
            await addDoc(recentlyViewedCOllection, cardDetails);
        } catch (err) {
            console.error(err);
        }
        location.reload();
    };

    return (
        <div className='relative min-w-[290px] max-w-sm shadow-md pb-2 flex flex-col gap-3'>
            <Link
                to={`/product/${id}`}
                onClick={() => handleAddToRecentlyViewed()}
                className='flex flex-col gap-1'
            >
                <div className='rounded-t-lg overflow-hidden bg-gray-300'>
                    <img
                        src={image[0]}
                        alt=''
                        loading='lazy'
                        className='min-h-[200px]'
                    />
                </div>
                <div className='px-2 flex flex-col gap-1'>
                    <div className='flex justify-between font-semibold'>
                        <p>wireless earbuds, ipx8</p>
                        <p>${price}</p>
                    </div>
                    <p>wired sterio headset with mic</p>
                    <div className='flex gap-2 items-center'>
                        <RatingComponent rating={rating} />
                        <p className='font-semibold'>({reviews})</p>
                    </div>
                </div>
            </Link>
            <button
                onClick={() => handleAddToCart()}
                className='ring ring-green-800 py-1 px-3 m-1 ms-2 rounded-xl flex gap-2 items-center w-fit'
            >
                <ReactIcons.AiOutlineShoppingCart className='text-2xl' />
                <span>add to cart</span>
            </button>

            <button
                onClick={() => handleSubmitFav()}
                className='absolute top-3 right-3 text-3xl text-white hover:text-gray-200 active:text-red-700 active:animate-ping'
            >
                <ReactIcons.AiOutlineHeart />
            </button>
        </div>
    );
};

export default Card;
