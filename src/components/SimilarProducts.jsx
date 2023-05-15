import Card from "./Card";
import { useContext } from "react";
import { ContextProvider } from "../App";
const SimilarProducts = () => {
    const providedData = useContext(ContextProvider);

    return (
        <div className='capitalize py-[1.5%] px-[5%] overflow-hidden '>
            <p className='text-4xl font-bold'>similar items!</p>
            <div className='flex gap-5 overflow-x-scroll '>
                {providedData.data.map((item) => (
                    <Card key={item} id={item} />
                ))}
            </div>
        </div>
    );
};
export default SimilarProducts;
