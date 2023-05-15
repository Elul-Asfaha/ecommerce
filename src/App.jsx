import MinBanner from "./components/MinBanner.jsx";
import Nav from "./components/Nav.jsx";
import Banner from "./components/Banner.jsx";
import Filter from "./components/Filter.jsx";
import Products from "./components/Products.jsx";
import SimilarProducts from "./components/SimilarProducts.jsx";
import RecentlyViewedProducts from "./components/RecentlyViewedProducts.jsx";
import { createContext, useState } from "react";
import Product from "./components/Product.jsx";

export const ContextProvider = createContext();
function App() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [fav, setFav] = useState([]);
    console.log(fav);
    return (
        <ContextProvider.Provider value={{ fav, setFav, data }}>
            <div>
                <MinBanner />
                <Nav />
                <Banner />
                <Filter />
                <Product />
                <Products />
                <SimilarProducts />
                <RecentlyViewedProducts />
            </div>
        </ContextProvider.Provider>
    );
}

export default App;
