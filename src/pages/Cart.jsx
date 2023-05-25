import { useContext, useState } from "react";
import { ContextProvider } from "../App";
import ReactIcons from "../components/ReactIconsImport";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const Cart = () => {
    const providedData = useContext(ContextProvider);
    const cartCollectionRef = collection(db, "cart");
    const [cart, setCart] = useState([]);

    // removes the item selected from the cart collection in the firebase databse
    const handleRemoveCartItem = async (cartItemId) => {
        const cartCollectionRef = doc(db, "cart", cartItemId);
        await deleteDoc(cartCollectionRef);
        window.location.reload();
    };

    const dispCartItems = providedData.cart.map((items) => (
        <div
            key={items.cartId}
            className='flex flex-col  md:max-w-[800px] shadow-lg gap-4 pb-5 rounded-lg'
        >
            <Link
                to={`/product/${items.id}`}
                className='flex flex-col md:flex-row justify-between items-center gap-5 md:px-5'
                onClick={() => providedData.setCartToggle(false)}
            >
                <div className='flex md:flex-1 w-[320px] md:w-auto h-[150px]'>
                    <img
                        src={items.image[0]}
                        alt=''
                        loading='lazy'
                        className='cover rounded-lg'
                    />
                </div>
                <div className='flex md:flex-1 flex-col text-2xl'>
                    <p className='text-center'>{items.model_name}</p>
                    <div className='flex items-center justify-center gap-1'>
                        <p className='flex' key={1}>
                            {items.rating >= 1 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {items.rating >= 2 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {items.rating >= 3 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {items.rating >= 4 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                            {items.rating == 5 ? (
                                <ReactIcons.AiFillStar className='text-yellow-500' />
                            ) : (
                                <ReactIcons.AiOutlineStar className='bg-white' />
                            )}
                        </p>
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
    );
};
export default Cart;
