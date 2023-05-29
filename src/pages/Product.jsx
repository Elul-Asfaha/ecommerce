import { useContext, useState, useEffect } from "react";
import ReactIcons from "../components/ReactIconsImport";
import Nav from "../components/Nav.jsx";
import { ContextProvider } from "../App";
import { Link, useParams } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import RatingComponent from "../components/Ratingcomponent";
const Product = () => {
    const providedData = useContext(ContextProvider);
    const [amount, setAmount] = useState(1);
    const [color, setColor] = useState(1);
    const { id } = useParams(); // gets the product id from the card component

    const details = providedData.store.filter((items) => items.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleAmountDecrease = () => {
        // decreases the amount of items that are to be ordered
        amount > 1 && setAmount((item) => (item -= 1));
    };
    const handleAmountIncrease = () => {
        //increases the amount of items that are to be ordered
        amount < details[0].amount && setAmount((item) => (item += 1));
    };

    const handleAddToCart = async () => {
        const cartCollectionRef = collection(db, "cart");
        try {
            await addDoc(cartCollectionRef, details[0]);
        } catch (err) {
            console.error(err);
        }
    };

    // this functions prevents the rating from being calculated before the details var is assigned
    const handleRatingCalc = () => {
        const ratingDisp = <RatingComponent rating={details[0].rating} />;
        return ratingDisp;
    };

    return (
        <div>
            <Nav back={true} />

            {/* prevents the page from displaying the content before the details var is assigned */}
            {!details.length == 0 && (
                <div
                    onClick={() => providedData.setCartToggle(false)}
                    className='flex flex-col lg:grid mt-[5%] md:mt-[2%] lg:grid-cols-2 gap-5 px-[5%]'
                >
                    <div className='flex flex-col justify-center gap-3'>
                        <div className='flex max-h-[700px]'>
                            <img
                                src={details[0].image[0] && details[0].image[0]}
                                alt=''
                                loading='lazy'
                                className='cover'
                            />
                        </div>
                        <div className='grid grid-cols-4 gap-2 max-h-[200px]'>
                            <img
                                src={details[0].image[1] && details[0].image[1]}
                                alt=''
                                loading='lazy'
                                className='container flex-1'
                            />
                            <img
                                src={details[0].image[2] && details[0].image[2]}
                                alt=''
                                loading='lazy'
                                className='cover'
                            />
                            <img
                                src={details[0].image[3] && details[0].image[3]}
                                alt=''
                                loading='lazy'
                                className='cover'
                            />
                            <img
                                src={details[0].image[4] && details[0].image[4]}
                                alt=''
                                loading='lazy'
                                className='cover'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col my-5'>
                        <div className='flex flex-col gap-4 border-b py-5'>
                            <p className='text-4xl font-bold capitalize'>
                                {details[0].model_name && details[0].model_name}
                            </p>
                            <p className='max-w-[400px]'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Modi, et!
                            </p>
                            <div className='flex items-center gap-1 text-2xl'>
                                {handleRatingCalc()}
                                <p>
                                    ({details[0].reviews && details[0].reviews})
                                </p>
                            </div>
                        </div>
                        <div className='py-5 border-b my-5'>
                            <p className='font-bold text-2xl'>
                                ${details[0].price && details[0].price}
                            </p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='flex md:flex-col border-b gap-5 md:gap-2 py-5 '>
                            <p className='text-xl font-bold  capitalize'>
                                choose a color
                            </p>
                            <div className='flex gap-4'>
                                <div
                                    onClick={() => setColor(1)}
                                    className={`flex w-[35px] h-[35px] cursor-pointer rounded-full outline outline-3 ${
                                        color === 1
                                            ? "outline-black"
                                            : "outline-red-200"
                                    } outline-offset-4 rotate-90`}
                                >
                                    <div className='flex-1 bg-black rounded-s-full'></div>
                                    <div className='flex-1 bg-red-200 rounded-e-full'></div>
                                </div>
                                <div
                                    onClick={() => setColor(2)}
                                    className={`flex w-[35px] h-[35px] rounded-full cursor-pointer outline outline-3 ${
                                        color === 2
                                            ? "outline-black"
                                            : "outline-red-200"
                                    } outline-offset-4 rotate-90`}
                                >
                                    <div className='flex-1 bg-black rounded-s-full'></div>
                                    <div className='flex-1 bg-red-200 rounded-e-full'></div>
                                </div>
                                <div
                                    onClick={() => setColor(3)}
                                    className={`flex w-[35px] h-[35px] rounded-full cursor-pointer outline outline-3 ${
                                        color === 3
                                            ? "outline-black"
                                            : "outline-red-200"
                                    } outline-offset-4 rotate-90`}
                                >
                                    <div className='flex-1 bg-black rounded-s-full'></div>
                                    <div className='flex-1 bg-red-200 rounded-e-full'></div>
                                </div>
                                <div
                                    onClick={() => setColor(4)}
                                    className={`flex w-[35px] h-[35px] rounded-full cursor-pointer outline outline-3 ${
                                        color === 4
                                            ? "outline-black"
                                            : "outline-red-200"
                                    } outline-offset-4 rotate-90`}
                                >
                                    <div className='flex-1 bg-black rounded-s-full'></div>
                                    <div className='flex-1 bg-red-200 rounded-e-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 py-2 my-5'>
                            <div className='flex gap-5 flex-col items-center'>
                                <div className='flex items-center rounded-full w-fit md:mx-0 mx-auto bg-gray-200 '>
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
                                {details[0].amount <= 20 && (
                                    <div>
                                        only{" "}
                                        <span className='text-orange-500'>
                                            {details[0].amount} items
                                        </span>{" "}
                                        left!
                                        <br />
                                        dont miss it
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <Link
                                    to={`/order/${id}`}
                                    className='md:flex-1 bg-green-800 py-2 px-4 rounded-full text-center'
                                >
                                    buy now
                                </Link>
                                <button
                                    onClick={() => handleAddToCart()}
                                    className='md:flex-1 bg-white py-2 px-4 outline outline-2 outline-green-700 rounded-full'
                                >
                                    add to cart
                                </button>
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <ReactIcons.BsTruck className='m-2 text-3xl text-orange-600' />

                            <div className='flex-1 flex flex-col m-2 justify-evenly'>
                                <p className='font-bold'>Free delivery</p>
                                <p>
                                    Enter your postal code for delivery
                                    avalibility
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <ReactIcons.AiOutlineCalendar className='m-2 text-3xl text-orange-600' />
                            <div className='flex-1 flex flex-col m-2 justify-evenly'>
                                <p className=' font-bold'>Return delivery</p>
                                <p>free 30 days delivery returns. details </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Product;
