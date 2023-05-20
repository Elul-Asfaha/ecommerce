import Card from "./Card";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../App";
const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const providedData = useContext(ContextProvider);
    const changeWidthOfCard = true;

    const dispProducts = providedData.store;
    const dispFilteredProducts = dispProducts.color
        ? dispProducts.filter(
              (item) =>
                  (item.price != ""
                      ? Number(item.price) <= Number(providedData.filter.price)
                      : "") &&
                  (providedData.filter.color != ""
                      ? item.color.includes(providedData.filter.color)
                      : "")
          )
        : dispProducts.filter((item) =>
              item.price != ""
                  ? Number(item.price) <= Number(providedData.filter.price)
                  : ""
          );
    return (
        <div className='capitalize py-[2%] px-[5%] flex flex-col items-center md:block'>
            <p className='text-4xl font-bold mb-5'>headphones for you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {dispFilteredProducts.length == 0
                    ? dispProducts
                          .slice(
                              (providedData.paginationNumber - 1) * 50,
                              providedData.paginationNumber * 50
                          )
                          .map((item) => (
                              <Card
                                  key={item.id}
                                  color={item.color}
                                  id={item.id}
                                  image={item.image}
                                  price={item.price}
                                  name={item.model_name}
                                  reviews={item.reviews}
                                  rating={item.rating}
                                  changeWidthOfCard={changeWidthOfCard}
                              />
                          ))
                    : dispFilteredProducts
                          .slice(0, 40)
                          .map((item) => (
                              <Card
                                  key={item.id}
                                  color={item.color}
                                  id={item.id}
                                  image={item.image}
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
