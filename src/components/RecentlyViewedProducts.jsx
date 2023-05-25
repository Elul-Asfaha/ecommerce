import Card from "./Card";
import { ContextProvider } from "../App";
import { useContext } from "react";
const RecentlyViewedProducts = () => {
    const providedData = useContext(ContextProvider);
    const recentlyViewedFilter = providedData.recentlyViewed;
    return (
        <div className='capitalize flex flex-col pb-[1.5%] px-[5%] overflow-hidden gap-5'>
            <p className='text-4xl  font-bold'>Recently viewed</p>
            <div className='flex p-5 gap-5 overflow-x-scroll '>
                {recentlyViewedFilter.map((item) => (
                    <Card
                        key={item.recentlyViewedId}
                        color={item.color[0]}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        name={item.model_name}
                        reviews={item.reviews}
                        rating={item.rating}
                        amount={item.amount}
                    />
                ))}
            </div>
        </div>
    );
};
export default RecentlyViewedProducts;
