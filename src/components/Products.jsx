import Card from "./Card";
import { useContext } from "react";
import { ContextProvider } from "../App";
const Products = () => {
    const providedData = useContext(ContextProvider);
    const changeWidthOfCard = true;

    const dispProducts = providedData.ecommerce;

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
                    ? dispProducts.map((item) => (
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
                      ))
                    : dispFilteredProducts.map((item) => (
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
