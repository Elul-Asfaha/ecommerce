import { useContext, useEffect, useState } from "react";
import OrderCart from "../components/OrderCart";
import Nav from "../components/Nav";
import { ContextProvider } from "../App";
import { useParams } from "react-router-dom";

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
            <Nav back={true} />
            <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-5 capitalize md:px-[10%]'>
                <div className='grid grid-row-2 gap-[60px]'>
                    <div className='border border-1 py-5'>
                        <p className='flex flex-col font-bold text-3xl px-5'>
                            review item and shipping
                        </p>
                        {purchase}
                    </div>
                    <div className='border border-1 p-5 flex flex-col gap-5'>
                        <p className='flex flex-col font-bold text-3xl px-5'>
                            delivery information
                        </p>
                        <div className='flex flex-col gap-5'>
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
                <div className='flex flex-col p-5 border border-1 h-fit'>
                    <form className='flex flex-col gap-2'>
                        <p className='text-3xl'>order summery</p>
                        <div>
                            <p>total:{cartTotal && cartTotal}</p>
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
                        <div className='flex'>
                            <div className='px-3 py-2'>paypal</div>
                            <div className='px-3 py-2'>amazon</div>
                            <div className='px-3 py-2'>mastercard</div>
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
            </div>
        </div>
    );
};
export default Order;
