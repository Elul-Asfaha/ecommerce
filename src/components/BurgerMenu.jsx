import { useContext } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 md:hidden bg-white'>
            <div className='absolute flex justify-end top-5 right-5 p-2'>
                <ReactIcons.AiOutlineClose
                    className='text-3xl '
                    onClick={providedData.handleBurgerToggler}
                />
            </div>
            <div className='flex flex-col items-center gap-4 text-2xl font-bold py-[15%]'>
                <Link to='/' onClick={providedData.handleBurgerToggler}>
                    Home
                </Link>
                <Link to='/cart' onClick={providedData.handleBurgerToggler}>
                    Cart (
                    {providedData.cart.length != 0
                        ? providedData.cart.length
                        : "0"}
                    )
                </Link>
                <Link to='/wishlist' onClick={providedData.handleBurgerToggler}>
                    Wishlist (
                    {providedData.wishlist.length != 0
                        ? providedData.wishlist.length
                        : "0"}
                    )
                </Link>
            </div>
        </div>
    );
};
export default BurgerMenu;
