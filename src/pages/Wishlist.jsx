import { useContext } from "react";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ReactIcons, RatingComponent, Nav } from "../components";

const Wishlist = () => {
    const providedData = useContext(ContextProvider);
    const handleRemoveWishlist = async (wishId) => {
        const wishlistCollectionRef = doc(db, "wishlist", wishId);
        try {
            await deleteDoc(wishlistCollectionRef);
        } catch (err) {
            console.error(err);
        }
        location.reload();
    };

    const dispCartItems = providedData.wishlist.map((items) => (
        <div
            key={items.wishlistId}
            className='flex flex-col md:flex-row md:max-w-[800px] shadow-lg gap-4 rounded-lg  md:pe-5 md:justify-between items-center'
        >
            <Link
                to={`/product/${items.id}`}
                className='flex flex-col md:flex-row justify-between items-center gap-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                <div className='relative flex bg-gray-400'>
                    <img
                        src={
                            items.image[0] &&
                            `https://source.unsplash.com/1700x${
                                Math.random() * (1080 - 700) + 700
                            }?headphone`
                        }
                        loading='lazy'
                        className='bg-gray-300 cover min-w-[320px] sm:w-full max-w-[350px] min-h-[209px]'
                        alt=''
                    />
                </div>
                <div className='flex md:flex-1 flex-col text-2xl'>
                    <p className='text-center'>{items.model_name}</p>
                    <div className='flex items-center justify-center gap-1'>
                        <RatingComponent rating={items.rating} />

                        <p>({items.reviews && items.reviews})</p>
                    </div>
                </div>
                <div className='font-bold text-center md:flex-1'>
                    ${items.price}
                </div>
            </Link>
            <button
                className='text-center p-1 mx-auto md:mx-0 font-bold text-3xl rounded-xl w-fit h-fit active:bg-green-800'
                onClick={() => handleRemoveWishlist(items.wishlistId)}
            >
                <ReactIcons.TiCancel />
            </button>
        </div>
    ));
    return (
        <div className='flex flex-col gap-5 pb-[100px]'>
            <Nav back={true} />
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-5 mx-auto'>
                    {providedData.wishlist.length != 0 ? (
                        dispCartItems
                    ) : (
                        <div className='flex items-center text-center justify-center h-[60px]'>
                            <p className='font-bold'>Such empty? Much Wow!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Wishlist;
