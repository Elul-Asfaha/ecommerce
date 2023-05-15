import Card from "./Card";
import { ContextProvider } from "../App";
import { useContext } from "react";
const RecentlyViewedProducts = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='capitalize py-[1.5%] px-[5%] overflow-hidden '>
            <p className='text-4xl font-bold'>recently viewed</p>
            <div className='flex gap-5 overflow-x-scroll'>
                {providedData.data.map((item) => (
                    <Card key={item} id={item} />
                ))}
            </div>
        </div>
    );
};
export default RecentlyViewedProducts;
