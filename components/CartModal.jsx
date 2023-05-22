import { useContext } from "react";
import { ContextProvider } from "../App";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";

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
                    <p className='flex' key={items.id}>
                        {items.rating >= 1 ? (
                            <ReactIcons.AiFillStar className='text-green-800' />
                        ) : (
                            <ReactIcons.AiOutlineStar className='bg-white' />
                        )}
                        {items.rating >= 2 ? (
                            <ReactIcons.AiFillStar className='text-green-800' />
                        ) : (
                            <ReactIcons.AiOutlineStar className='bg-white' />
                        )}
                        {items.rating >= 3 ? (
                            <ReactIcons.AiFillStar className='text-green-800' />
                        ) : (
                            <ReactIcons.AiOutlineStar className='bg-white' />
                        )}
                        {items.rating >= 4 ? (
                            <ReactIcons.AiFillStar className='text-green-800' />
                        ) : (
                            <ReactIcons.AiOutlineStar className='bg-white' />
                        )}
                        {items.rating == 5 ? (
                            <ReactIcons.AiFillStar className='text-green-800' />
                        ) : (
                            <ReactIcons.AiOutlineStar className='bg-white' />
                        )}
                    </p>
                    <p>({items.reviews && items.reviews})</p>
                </div>
            </div>
            <div className='font-bold'>${items.price}</div>
        </Link>
    ));

    return (
        <div className='hidden md:flex bg-white shadow-xl py-5 fixed overflow-y-scroll border border-white top-[5%] right-5 flex-col gap-5 w-[600px] max-h-[800px] rounded-xl'>
            {providedData.cart.length != 0 ? (
                dispCartItems
            ) : (
                <div className='flex items-center text-center justify-center h-[60px]'>
                    <p className='font-bold'>Such empty? Much Wow!</p>
                </div>
            )}
            <Link
                to='/cart'
                onClick={() => providedData.setCartToggle(false)}
                className='capitalize underline text-center font-bold'
            >
                show all
            </Link>
        </div>
    );
};
export default CartModal;
