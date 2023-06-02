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
        <div
            className={`relative min-w-full sm:min-w-fit sm:w-[40%] md:max-w-[330px] flex flex-col gap-1 capitalize`}
        >
            <Link
                to={`/product/${id}`}
                onClick={() => handleAddToRecentlyViewed()}
            >
                <div className='relative flex max-w-sm'>
                    <img
                        src={image[0]}
                        alt=''
                        loading='lazy'
                        className='bg-gray-300 cover rounded-lg w-full min-h-[200px]'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between font-bold'>
                        <p>wireless earbuds, ipx8</p>
                        <p>$ {price}</p>
                    </div>
                    <p>wired sterio headset with mic</p>
                    <div className='flex items-center gap-1 text-xl font-bold'>
                        <RatingComponent rating={rating} />
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
