import { useContext } from "react";
import logo from "../assets/logo.png";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";
import { ContextProvider } from "../App";
const Nav = ({ back }) => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='flex items-center justify-between gap-5 capitalize px-[5%] pt-4'>
            <div className=' hidden md:flex items-center justify-between'>
                <Link
                    to='/'
                    className='flex w-[50px]'
                    onClick={() => providedData.setCartToggle(false)}
                >
                    <img src={logo} alt='' className='cover' />
                </Link>
            </div>
            {back && (
                <div
                    className='flex absolute text-3xl left-[5%] md:hidden'
                    onClick={() => history.back()}
                >
                    <ReactIcons.BiArrowBack />
                </div>
            )}
            <div className=' flex mx-auto sm:mx-0 items-center justify-center md:justify-between'>
                <div className='flex items-center bg-slate-200 rounded-full px-5 py-1'>
                    <input
                        type='text'
                        className='outline-none  bg-slate-200'
                        placeholder='search'
                    />
                    <ReactIcons.AiOutlineSearch className='text-xl' />
                </div>
            </div>{" "}
            <div
                className='hidden relative md:flex items-center cursor-pointer gap-4'
                onClick={providedData.handleCartToggler}
            >
                <div className='relative'>
                    <ReactIcons.AiOutlineShoppingCart className='text-4xl' />
                    <div className='absolute inset-y-0 -top-3 -right-3 bg-orange-300 text-center text-lg w-[30px] h-[30px] rounded-full '>
                        {providedData.cart.length}
                    </div>
                </div>
                <p>cart</p>
            </div>
            <div
                className='flex absolute text-3xl right-[5%] md:hidden'
                onClick={providedData.handleBurgerToggler}
            >
                <ReactIcons.HiMenuAlt3 />
            </div>
        </div>
    );
};
export default Nav;
