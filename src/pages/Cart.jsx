import { useContext } from "react";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import RatingComponent from "../components/Ratingcomponent";
const Cart = () => {
    const providedData = useContext(ContextProvider);
    // removes the item selected from the cart collection in the firebase databse
    const handleRemoveCartItem = async (cartItemId) => {
        const cartCollectionRef = doc(db, "cart", cartItemId);
        await deleteDoc(cartCollectionRef);
        providedData.getCartList;
    };

    const dispCartItems = providedData.cart.map((items) => (
        <div
            key={items.cartId}
            className='flex flex-col md:max-w-[800px] shadow-lg gap-4 pb-5 rounded-lg'
        >
            <Link
                to={`/product/${items.id}`}
                className='flex flex-col md:flex-row justify-between items-center gap-5 md:px-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                <div className='relative flex'>
                    <img
                        src={items.image[0]}
                        alt=''
                        loading='lazy'
                        className='bg-gray-300 cover rounded-lg min-w-[320px] sm:min-w-full md:w-full max-w-[350px] min-h-[209px]'
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
                className='border border-black text-center p-1 mx-auto font-bold rounded-xl w-[90%] active:bg-green-800'
                onClick={() => handleRemoveCartItem(items.cartId)}
            >
                Remove
            </button>
        </div>
    ));
    return (
        <div className='flex flex-col gap-5 '>
            <Nav back={true} />
            <div className='flex flex-col gap-5 mx-auto px-5'>
                {providedData.cart.length != 0 ? (
                    dispCartItems
                ) : (
                    <div className='flex items-center text-center justify-center h-[60px]'>
                        <p className='font-bold'>Such empty? Much Wow!</p>
                    </div>
                )}

                {providedData.cart.length != 0 && (
                    <Link
                        to={`/order/${"buyAll"}`}
                        className='text-center mx-auto w-fit px-4 py-2 rounded-md'
                    >
                        Buy All
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Cart;
