import Card from "./Card";
import { useContext } from "react";
import { ContextProvider } from "../App";
const Products = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='capitalize px-[5%] flex flex-col items-center md:block'>
            <p className='text-4xl font-bold'>headphones for you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {providedData.data.map((item) => (
                    <Card key={item} id={item} />
                ))}
            </div>
        </div>
    );
};
export default Products;
