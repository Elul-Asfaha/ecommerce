import { useContext } from "react";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import RatingComponent from "./Ratingcomponent";

const CartModal = () => {
    const providedData = useContext(ContextProvider);
    const dispCartItems = providedData.cart.map((items) => (
        <Link
            to={`/product/${items.id}`}
            key={items.id}
            className='flex justify-between items-center px-5'
            onClick={() => providedData.setCartToggle(false)}
        >
            <div className='flex h-[100px]'>
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
    ));

    return (
        <div className='fixed z-50 top-0 left-0 right-0 bottom-0'>
            <div
                className='w-full h-full'
                onClick={() => providedData.setCartToggle(false)}
            ></div>
            <div onClick={() => providedData.setCartToggle(false)}>
                <div className='hidden md:flex flex-col justify-between bg-white shadow-xl py-5 fixed overflow-y-scroll scrollbar-hide border border-white top-[5%] bottom-[5%] right-5 w-[500px] max-h-[800px] rounded-xl'>
                    <div className='flex flex-col gap-5'>
                        {providedData.cart.length != 0 ? (
                            dispCartItems
                        ) : (
                            <div className='flex items-center text-center justify-center h-[60px]'>
                                <p className='font-bold'>
                                    Such empty? Much Wow!
                                </p>
                            </div>
                        )}
                    </div>
                    <Link
                        to='/cart'
                        onClick={() => providedData.setCartToggle(false)}
                        className='capitalize underline text-center font-bold'
                    >
                        show all
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CartModal;
