import { useContext } from "react";
import { ContextProvider } from "../App";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";

const CartModal = () => {
    const providedData = useContext(ContextProvider);
    const filtered = providedData.cart
        .map((item) =>
            providedData.ecommerce.filter((items) => items.id === item.Id)
        )
        .map((item) => (item = item[0])); // second .map is to change it from an array of an array of objects to just an array of object

    const dispCartItems = filtered.map((items) => (
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
            <div>
                <div className='flex items-center gap-1 text-2xl'>
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
        <div className='flex bg-white shadow-xl py-5 fixed top-[5%] right-5 flex-col gap-5 w-[600px] rounded-xl'>
            {providedData.cart && dispCartItems}
            <Link
                to='/cart'
                className='capitalize underline text-center font-bold'
            >
                show all
            </Link>
        </div>
    );
};
export default CartModal;
