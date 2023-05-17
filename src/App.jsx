import { createContext, useState } from "react";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu.jsx";
import ecommerce from "./mockData/ecommerce.json";
export const ContextProvider = createContext();
function App() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [fav, setFav] = useState([]);
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [cart, setCart] = useState([]);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const handleBurgerToggler = () => {
        setBurgerToggle(!burgerToggle);
    };
    console.log(cart);

    return (
        <ContextProvider.Provider
            value={{
                fav,
                setFav,
                data,
                handleBurgerToggler,
                cart,
                setCart,
                ecommerce,
                setRecentlyViewed,
                recentlyViewed,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<Product />} />
                </Routes>
                {burgerToggle && <BurgerMenu />}
            </BrowserRouter>
        </ContextProvider.Provider>
    );
}

export default App;
