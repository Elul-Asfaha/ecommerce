import { useState } from "react";
import OrderCart from "./OrderCart";
import Nav from "./Nav";

const Order = () => {
    const [paymentNotif, setPaymentNotif] = useState(0);
    const [paymentEmail, setPaymentEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    return (
        <div>
            <Nav />
            <div className='grid grid-cols-1 md:grid-cols-2 capitalize md:px-[10%]'>
                <div className='grid grid-row-2 p-5 gap-[60px]'>
                    <div className='border border-1'>
                        <p className='flex flex-col font-bold text-3xl px-5'>
                            review item and shipping
                        </p>
                        <OrderCart />
                    </div>
                    <div className='border border-1 p-5 flex flex-col gap-5'>
                        <p className='flex flex-col font-bold text-3xl px-5'>
                            delivery information
                        </p>
                        <div className='flex flex-col gap-5'>
                            <div className='flex'>
                                <div className='w-[20%]'>Name:</div>
                                <div>elul</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[20%]'>Address:</div>
                                <div>djbbouti street</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[20%]'>city:</div>
                                <div>Addis ababab</div>
                            </div>
                            <div className='flex'>
                                <div className='w-[20%]'>Phone:</div>
                                <div>0909791112</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-5'>
                    <form className='flex flex-col gap-2'>
                        <p className='text-3xl'>order summery</p>
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
