import Card from "./Card";
import { useContext } from "react";
import { ContextProvider } from "../App";
const Products = () => {
    const providedData = useContext(ContextProvider);
    const changeWidthOfCard = true;
    return (
        <div className='capitalize px-[5%] flex flex-col items-center md:block'>
            <p className='text-4xl font-bold mb-5'>headphones for you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {providedData.ecommerce.map((item) => (
                    <Card
                        key={item.id}
                        color={item.color[0]}
                        id={item.id}
                        image={item.image[0]}
                        price={item.price}
                        name={item.model_name}
                        reviews={item.reviews}
                        rating={item.rating}
                        changeWidthOfCard={changeWidthOfCard}
                    />
                ))}
            </div>
        </div>
    );
};
export default Products;
