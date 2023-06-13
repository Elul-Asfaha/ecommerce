import { useContext, useEffect, useState } from "react";
import OrderCart from "../components/OrderCart";
import { ContextProvider } from "../App";
import { useParams } from "react-router-dom";
import Assets from "../assets/Assets";
const Order = () => {
    const providedData = useContext(ContextProvider);
    const [paymentNotif, setPaymentNotif] = useState(0);
    const [paymentEmail, setPaymentEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const { id } = useParams();

    const buyNow = providedData.store.filter((item) => item.id == id);
    const purchase =
        id === "buyAll" ? (
            <OrderCart checkOut={providedData.cart} />
        ) : (
            <OrderCart checkOut={buyNow} />
        );
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        id === "buyAll"
            ? providedData.cart.map((items) =>
                  setCartTotal((prev) => (prev += items.price))
              )
            : setCartTotal(buyNow[0].price);
        console.log(cartTotal);
    }, []);
    return (
        <div>
            <div className='mx-auto w-fit pt-5 text-2xl'>
                Checkout (
                <span className='text-blue-700 '>
                    {id == "buyAll" ? providedData.cart.length : buyNow.length}{" "}
                    items
                </span>
                )
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  py-5 gap-5 capitalize md:px-[5%]'>
                <div className='grid grid-row-2 gap-[60px] col-span-2'>
                    <div className='border border-1 rounded-md py-5'>
                        <p className='flex flex-col text-center font-bold text-3xl px-5'>
                            review your items
                        </p>
                        {purchase}
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col p-5 border border-1 rounded-md h-fit'>
                        <form className='flex flex-col gap-2 px-5 md:px-5 '>
                            <p className='text-3xl'>order summery</p>
                            <div>
                                <p className='font-bold'>
                                    total: ${cartTotal && Number(cartTotal)}
                                </p>
                                <p></p>
                            </div>
                            <p className='font-bold'>payment details</p>
                            <fieldset>
                                <div className='flex gap-2'>
                                    <input
                                        name='paymentNotif'
                                        type='radio'
                                        value='0'
                                        onChange={(e) =>
                                            setPaymentNotif(e.target.value)
                                        }
                                    />
                                    <label htmlFor=''>Email on Delivery</label>
                                </div>
                                <div className='flex gap-2'>
                                    <input
                                        name='paymentNotif'
                                        type='radio'
                                        value='1'
                                        onChange={(e) =>
                                            setPaymentNotif(e.target.value)
                                        }
                                    />
                                    <label htmlFor=''>payment</label>
                                </div>
                            </fieldset>
                            <div className='flex flex-wrap gap-5'>
                                <img
                                    src={Assets.paypal}
                                    alt=''
                                    className='h-[1.5rem] w-[3rem] container'
                                />
                                <img
                                    src={Assets.mastercard}
                                    alt=''
                                    className='h-[1.5rem] w-[3rem] container'
                                />
                                <img
                                    src={Assets.prime}
                                    alt=''
                                    className='h-[1.5rem] w-[3rem] container'
                                />
                            </div>
                            <div className='border bg-gray-200 '>
                                <input
                                    type='email'
                                    value={paymentEmail}
                                    onChange={(e) =>
                                        setPaymentEmail(e.target.value)
                                    }
                                    placeholder='Email'
                                    className='outline-none w-full p-1'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='border border-1 rounded-md p-5 flex flex-col gap-5 px-10 md:px-5'>
                        <p className='flex flex-col text-3xl px-5'>
                            delivery information
                        </p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex'>
                                <div className='w-fit pe-5'>Name:</div>
                                <div>elul</div>
                            </div>
                            <div className='flex'>
                                <div className='w-fit pe-5'>Address:</div>
                                <div>djbbouti street</div>
                            </div>
                            <div className='flex'>
                                <div className='w-fit pe-5'>city:</div>
                                <div>Addis ababab</div>
                            </div>
                            <div className='flex'>
                                <div className='w-fit pe-5'>Phone:</div>
                                <div>0909791112</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Order;
