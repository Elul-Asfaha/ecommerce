import { createContext, useState } from "react";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu.jsx";
import ecommerce from "./mockData/ecommerce.json";
import CartModal from "./components/CartModal.jsx";
import Cart from "./components/Cart.jsx";
export const ContextProvider = createContext();
function App() {
    const [paginationNumber, setPaginationNumber] = useState(1);
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [fav, setFav] = useState([]);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [cartToggle, setCartToggle] = useState(false);
    const [cart, setCart] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
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
                fav,
                setFav,
                data,
                handleBurgerToggler,
                cart,
                setCart,
                setCartToggle,
                ecommerce,
                setRecentlyViewed,
                recentlyViewed,
                handleCartToggler,
                sort,
                handleSortChange,
                filter,
                handleSelectChange,
                paginationNumber,
                setPaginationNumber,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
                {burgerToggle && <BurgerMenu />}
                {cartToggle && <CartModal />}
            </BrowserRouter>
        </ContextProvider.Provider>
    );
}

export default App;
