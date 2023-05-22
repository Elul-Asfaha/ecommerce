import { useContext } from "react";
import { ContextProvider } from "../App";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";

const OrderCart = () => {
    const providedData = useContext(ContextProvider);
    const dispCartItems = providedData.cart.map((items) => (
        <Link
            to={`/product/${items.id}`}
            key={items.id}
            className='flex flex-col gap-5 md:flex-col justify-between items-center px-5'
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
                    <p className='flex' key={1}>
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
        <div className=' py-5  border border-white flex flex-col gap-5 w-full'>
            {providedData.cart.length != 0 ? (
                dispCartItems
            ) : (
                <div className='flex items-center text-center justify-center h-[60px]'>
                    <p className='font-bold'>Such empty? Much Wow!</p>
                </div>
            )}
        </div>
    );
};
export default OrderCart;
