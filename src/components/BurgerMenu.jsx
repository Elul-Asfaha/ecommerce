import { useContext } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const BurgerMenu = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='fixed top-0 w-full md:hidden bg-white flex flex-col h-full'>
            <div className='flex justify-end p-5'>
                <ReactIcons.AiOutlineClose
                    className='text-3xl '
                    onClick={providedData.handleBurgerToggler}
                />
            </div>
            <div className='flex flex-col justify-between h-full pb-5'>
                <div className='flex flex-col items-center gap-4 text-2xl font-medium py-5'>
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
                    <Link
                        to='/wishlist'
                        onClick={providedData.handleBurgerToggler}
                    >
                        Wishlist (
                        {providedData.wishlist.length != 0
                            ? providedData.wishlist.length
                            : "0"}
                        )
                    </Link>
                </div>
                <div className='flex items-center justify-between px-5'>
                    <Avatar
                        alt={providedData.user}
                        src='/static/images/avatar/1.jpg'
                    />

                    <div
                        className='w-fit px-4 py-2 border border-black rounded-md cursor-pointer'
                        onClick={providedData.logout}
                    >
                        Logout
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BurgerMenu;
