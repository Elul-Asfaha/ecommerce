import MinBanner from "../components/MinBanner";
import Nav from "../components/Nav.jsx";
import Banner from "../components/Banner.jsx";
import Filter from "../components/Filter.jsx";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts.jsx";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../App";
import Products from "../components/Products.jsx";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const providedData = useContext(ContextProvider);
    return (
        <div className=''>
            <MinBanner />
            <Nav />
            <div onClick={() => providedData.setCartToggle(false)}>
                <Banner />
                <Filter />
                {providedData.store && <Products />}
                {providedData.recentlyViewed.length != 0 && (
                    <RecentlyViewedProducts />
                )}
            </div>
        </div>
    );
};
export default Home;
