import { createContext, useEffect, useState } from "react";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu.jsx";

import CartModal from "./components/CartModal.jsx";
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import Order from "./pages/Order.jsx";

import { makeServer } from "./server";
if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" });
}

export const ContextProvider = createContext(); //context provider

function App() {
    const [store, setStore] = useState([]);
    const [favs, setFavs] = useState([]);

    const [paginationNumber, setPaginationNumber] = useState(1);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        fetch("/ecommerce/products")
            .then((res) => res.json())
            .then((res) => setStore(res))
            .catch((err) => console.error(err));

        fetch("/ecommerce/favs")
            .then((res) => res.json())
            .then((res) => setFavs(res))
            .catch((err) => console.error(err));

        fetch("/ecommerce/cart")
            .then((res) => res.json())
            .then((res) => setCart(res))
            .catch((err) => console.error(err));

        fetch("/ecommerce/recentlyviewed")
            .then((res) => res.json())
            .then((res) => setRecentlyViewed(res))
            .catch((err) => console.error(err));
    }, []);

    const handleBurgerToggler = () => {
        setBurgerToggle(!burgerToggle);
    };

    const handleCartToggler = () => {
        setCartToggle(!cartToggle);
    };

    const [filter, setFilter] = useState({
        type: "",
        price: "",
        color: "",
    });

    const [sort, setSort] = useState({
        sortBy: " ",
    });

    const handleSelectChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFilter({
            ...filter,
            [name]: value,
        });
    };

    const handleSortChange = (e) => {
        e.preventDefault();
        setSort({
            sortBy: e.target.value,
        });
    };
    return (
        <ContextProvider.Provider
            value={{
                handleBurgerToggler,
                favs,
                setFavs,
                cart,
                setCart,
                setCartToggle,
                store,
                setRecentlyViewed,
                recentlyViewed,
                handleCartToggler,
                sort,
                handleSortChange,
                filter,
                handleSelectChange,
                paginationNumber,
                setPaginationNumber,
                totalPrice,
                setTotalPrice,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/order' element={<Order />} />
                </Routes>
                {burgerToggle && <BurgerMenu />}
                {cartToggle && <CartModal />}
            </BrowserRouter>
        </ContextProvider.Provider>
    );
}

export default App;
