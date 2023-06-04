import { useContext } from "react";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import RatingComponent from "../components/Ratingcomponent";
import ReactIcons from "../components/ReactIconsImport";
const Cart = () => {
    const providedData = useContext(ContextProvider);
    const handleRemoveCartItem = async (cartItemId) => {
        // removes the item selected from the cart collection in the firebase databse
        const cartCollectionRef = doc(db, "cart", cartItemId);
        await deleteDoc(cartCollectionRef);
        location.reload();
    };

    const dispCartItems = providedData.cart.map((items) => (
        <div
            key={items.cartId}
            className='flex flex-col md:flex-row md:max-w-[800px] shadow-lg gap-4 rounded-lg md:pe-5 justify-between items-center'
        >
            <Link
                to={`/product/${items.id}`}
                className='flex flex-col md:flex-row justify-between items-center gap-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                <div className='relative flex bg-gray-400'>
                    <img
                        src={items.image[0]}
                        alt=''
                        loading='lazy'
                        className='bg-gray-300 cover min-w-[320px] sm:w-full max-w-[350px] min-h-[209px]'
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
                className='text-center p-1 mx-auto font-bold text-3xl md:mx-0 rounded-xl w-fit h-fit active:bg-green-800'
                onClick={() => handleRemoveCartItem(items.cartId)}
            >
                <ReactIcons.BsTrash3 />
            </button>
        </div>
    ));
    return (
        <div className='flex flex-col gap-5 pb-[100px]'>
            <Nav back={true} />
            <div
                className='flex flex-col gap-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                {providedData.cart.length != 0 && (
                    <div className='radius-lg shadow-md w-full sm:max-w-sm sm:mx-auto'>
                        <Link to={`/order/${"buyAll"}`}>
                            <p className='bg-[#FCF0E4]  px-5 py-2 w-full text-center'>
                                Proceed to Checkout (
                                <span className='text-blue-700'>
                                    {providedData.cart.length} items
                                </span>
                                )
                            </p>
                        </Link>
                    </div>
                )}

                <div className='flex flex-col gap-5 mx-auto'>
                    {providedData.cart.length != 0 ? (
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
export default Cart;
