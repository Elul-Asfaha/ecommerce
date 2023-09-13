import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import { Cart, Authentication, Product, Home, Order, Wishlist } from "./pages";

//components
import {
    BurgerMenu,
    Login,
    SignUp,
    CartModal,
    PrivateRoutes,
} from "./components";

import data from "./ecommerce.json";

//context provider
export const ContextProvider = createContext();

//firebase
import { db } from "./config/firebase.js";
import { getDocs, collection } from "firebase/firestore";

function App() {
    const [user, setUser] = useState();
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [store, setStore] = useState([]);
    const [cart, setCart] = useState([]);
    const [paginationNumber, setPaginationNumber] = useState(1);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(true);

    // database variables
    const cartCollectionRef = collection(db, "cart");
    const wishCollectionRef = collection(db, "wishlist");
    const productCollectionRef = collection(db, "products");
    const recentlyViewedRef = collection(db, "recentlyviewed");

    const getProductList = async () => {
        setProductLoading(true);
        try {
            const data = await getDocs(productCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setStore(filteredData);
            setProductLoading(false);
        } catch (err) {
            console.error(err);
            setProductLoading(false);
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
    };
    useEffect(() => {
        let reloadUser = JSON.parse(sessionStorage.getItem("user"));
        reloadUser && setUser(reloadUser); // this check if the user has logged in for this session already and sets the users email if true
        reloadUser && setUserLoggedIn(true); // this check if the user has logged in for this session already and sets the users email if true

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
                getProductList,
                getCartList,
                getWishList,
                getRecentlyViewedList,
                productLoading,
                setProductLoading,
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
                userLoggedIn,
                filter,
                sort,
            }}
        >
            <div className='font-Roboto'>
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <PrivateRoutes userLoggedIn={userLoggedIn} />
                            }
                        >
                            <Route index element={<Home />} />
                            <Route
                                path='/product/:id'
                                element={<Product />}
                                exact
                            />
                            <Route path='/cart' element={<Cart />} exact />
                            <Route
                                path='/wishlist'
                                element={<Wishlist />}
                                exact
                            />
                            <Route
                                path='/order/:id'
                                element={<Order />}
                                exact
                            />
                        </Route>

                        <Route
                            path='/Authentication/'
                            element={
                                <Authentication userLoggedIn={userLoggedIn} />
                            }
                        >
                            <Route
                                path='/Authentication/login'
                                element={<Login />}
                            />
                            <Route
                                path='/Authentication/signup'
                                element={<SignUp />}
                            />
                        </Route>
                    </Routes>

                    {burgerToggle && <BurgerMenu />}
                    {cartToggle && <CartModal />}
                </BrowserRouter>
            </div>
        </ContextProvider.Provider>
    );
}

export default App;
