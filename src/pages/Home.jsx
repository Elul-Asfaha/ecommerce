import MinBanner from "../components/MinBanner";
import Nav from "../components/Nav.jsx";
import Banner from "../components/Banner.jsx";
import Filter from "../components/Filter.jsx";
import Products from "../components/Products.jsx";
import SimilarProducts from "../components/SimilarProducts.jsx";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts.jsx";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MinBanner />
            <Nav />
            <Banner />
            <Filter />
            <Products />
            <SimilarProducts />
            <RecentlyViewedProducts />
        </div>
    );
};
export default Home;
