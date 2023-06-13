import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Cart from "./pages/Cart.jsx";
import Authentication from "./pages/Authentication.jsx";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx";
import Wishlist from "./pages/Wishlist.jsx";

//components
import BurgerMenu from "./components/BurgerMenu.jsx";
import Login from "./components/authComponents/Login";
import SignUp from "./components/authComponents/SignUp";
import CartModal from "./components/CartModal.jsx";

import data from "./ecommerce.json";

//context provider
export const ContextProvider = createContext();

//firebase
import { db } from "./config/firebase.js";
import { getDocs, collection } from "firebase/firestore";

function App() {
    const [user, setUser] = useState();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [store, setStore] = useState(data);
    const [cart, setCart] = useState([]);
    const [paginationNumber, setPaginationNumber] = useState(1);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    // database variables
    const cartCollectionRef = collection(db, "cart");
    const wishCollectionRef = collection(db, "wishlist");
    const productCollectionRef = collection(db, "products");
    const recentlyViewedRef = collection(db, "recentlyviewed");

    const getProductList = async () => {
        try {
            const data = await getDocs(productCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setStore(filteredData);
        } catch (err) {
            console.error(err);
        }
    };
    const getCartList = async () => {
        try {
            const data = await getDocs(cartCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                cartId: doc.id,
            }));
            setCart(filteredData);
        } catch (err) {
            console.error(err);
        }
    };
    const getWishList = async () => {
        try {
            const data = await getDocs(wishCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                wishlistId: doc.id,
            }));
            setWishlist(filteredData);
        } catch (err) {
            console.error(err);
        }
    };
    const getRecentlyViewedList = async () => {
        try {
            const data = await getDocs(recentlyViewedRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                recentlyViewedId: doc.id,
            }));
            setRecentlyViewed(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    const logout = () => {
        setUser("");
        setUserLoggedIn(false);
        setBurgerToggle(false);
        sessionStorage.clear();
        console.log("hi");
    };
    useEffect(() => {
        let reloadUser = JSON.parse(sessionStorage.getItem("user"));
        reloadUser && setUser(reloadUser); // this check if the user has logged in for this session already and sets the users email if true
        reloadUser && setUserLoggedIn(true); // this check if the user has logged in for this session already and sets the users email if true
        // getProductList();
        // getCartList();
        // getWishList();
        // getRecentlyViewedList();
        return;
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
                wishlist,
                setWishlist,
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
                user,
                setUser,
                userLoggedIn,
                setUserLoggedIn,
                logout,
                loading,
                setLoading,
            }}
        >
            <div className='font-Roboto'>
                <BrowserRouter>
                    {!userLoggedIn && (
                        <Routes>
                            <Route element={<Authentication />}>
                                <Route path='/' element={<Login />} />
                                <Route path='/signup' element={<SignUp />} />
                            </Route>
                        </Routes>
                    )}
                    {userLoggedIn && (
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product/:id' element={<Product />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/wishlist' element={<Wishlist />} />
                            <Route path='/order/:id' element={<Order />} />
                        </Routes>
                    )}

                    {burgerToggle && <BurgerMenu />}
                    {cartToggle && <CartModal />}
                </BrowserRouter>
            </div>
        </ContextProvider.Provider>
    );
}

export default App;
