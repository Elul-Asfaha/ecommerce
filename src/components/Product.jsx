import { useState } from "react";
import ReactIcons from "./ReactIconsImport";
const Product = () => {
    const [amount, setAmount] = useState(1);
    const handleAmountDecrease = () => {
        amount > 1 && setAmount((item) => (item -= 1));
    };
    const handleAmountIncrease = () => {
        setAmount((item) => (item += 1));
    };
    console.log(amount);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-[5%]'>
            <div>
                <img src='' alt='' />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col border-b py-5'>
                    <p className='text-4xl font-bold capitalize'>Airpods-Max</p>
                    <p className='max-w-[400px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Modi, et!
                    </p>
                    <div className='flex items-center gap-1'>
                        <p className='flex'>
                            <ReactIcons.AiFillStar />
                            <ReactIcons.AiFillStar />
                            <ReactIcons.AiFillStar />
                            <ReactIcons.AiFillStar />
                            <ReactIcons.AiOutlineStar />
                        </p>
                        <p>(120)</p>
                    </div>
                </div>
                <div className='py-5 border-b'>
                    <p className='font-bold text-2xl'>$400.00</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex md:flex-col border-b gap-5 md:gap-2 py-5 '>
                    <p className='text-xl font-bold  capitalize'>
                        choose a color
                    </p>
                    <div className='flex gap-4'>
                        <div className='p-4 rounded-full outline outline-3 outline-offset-2 bg-black outline-red-200'></div>
                        <div className='p-4 rounded-full outline outline-3 outline-offset-2 bg-black outline-red-200'></div>
                        <div className='p-4 rounded-full outline outline-3 outline-offset-2 bg-black outline-red-200'></div>
                        <div className='p-4 rounded-full outline outline-3 outline-offset-2 bg-black outline-red-200'></div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 py-2'>
                    <div className='flex items-center rounded-full w-fit mx-auto bg-gray-200 '>
                        <button
                            onClick={handleAmountIncrease}
                            className='px-5 py-3 rounded-s-full hover:bg-gray-400'
                        >
                            +
                        </button>
                        <p className='px-5 py-3'>{amount}</p>
                        <button
                            onClick={handleAmountDecrease}
                            className='px-5 py-3 rounded-e-full hover:bg-gray-400'
                        >
                            -
                        </button>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <button className='md:flex-1 bg-green-800 py-2 px-4 rounded-full'>
                            buy now
                        </button>
                        <button className='md:flex-1 bg-white py-2 px-4 outline outline-2 outline-green-700 rounded-full'>
                            add to cart
                        </button>
                    </div>
                </div>
                <div>Free delivery</div>

                <div>Return delivery</div>
            </div>
        </div>
    );
};
export default Product;
