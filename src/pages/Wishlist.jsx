import { useContext } from "react";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import RatingComponent from "../components/Ratingcomponent";
const Wishlist = () => {
    const providedData = useContext(ContextProvider);
    const handleRemoveWishlist = async (wishId) => {
        const wishlistCollectionRef = doc(db, "wishlist", wishId);
        try {
            await deleteDoc(wishlistCollectionRef);
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    };

    const dispCartItems = providedData.wishlist.map((items) => (
        <div
            key={items.wishlistId}
            className='flex flex-col  md:max-w-[800px] shadow-lg gap-4 pb-5 rounded-lg'
        >
            <Link
                to={`/product/${items.id}`}
                className='flex flex-col md:flex-row justify-between items-center gap-5 md:px-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                <div className='flex h-[150px]'>
                    <img
                        src={items.image[0]}
                        alt=''
                        loading='lazy'
                        className='cover rounded-lg'
                    />
                </div>
                <div className='flex flex-col text-2xl'>
                    <p className='text-center'>{items.model_name}</p>
                    <div className='flex items-center justify-center gap-1'>
                        <RatingComponent rating={items.rating} />

                        <p>({items.reviews && items.reviews})</p>
                    </div>
                </div>
                <div className='font-bold'>${items.price}</div>
            </Link>
            <button
                className='border border-black text-center p-1 mx-auto font-bold rounded-xl w-[90%]'
                onClick={() => handleRemoveWishlist(items.wishlistId)}
            >
                Remove
            </button>
        </div>
    ));
    return (
        <div className='flex flex-col gap-5 '>
            <Nav back={true} />
            <div className='flex flex-col gap-5 mx-auto'>
                {providedData.wishlist.length != 0 ? (
                    dispCartItems
                ) : (
                    <div className='flex items-center text-center justify-center h-[60px] active:bg-green-800'>
                        <p className='font-bold'>Such empty? Much Wow!</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Wishlist;
