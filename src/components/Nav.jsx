import { useContext } from "react";
import logo from "../assets/logo.png";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";
import { ContextProvider } from "../App";
const Nav = ({ back }) => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='capitalize px-[5%] pt-4'>
            {/* desktop view */}
            <div className='hidden sm:flex items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <Link
                        to='/'
                        className='flex w-[50px]'
                        onClick={() => providedData.setCartToggle(false)}
                    >
                        <img src={logo} alt='' className='cover' />
                    </Link>
                </div>
                <div className='flex items-center justify-center md:justify-between'>
                    <div className='flex items-center bg-slate-200 rounded-full px-5 py-1'>
                        <input
                            type='text'
                            className='outline-none  bg-slate-200'
                            placeholder='search'
                        />
                        <ReactIcons.AiOutlineSearch className='text-xl' />
                    </div>
                </div>
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
            </div>

            {/* mobile view */}
            <div className='flex sm:hidden items-center justify-between'>
                {back ? (
                    <div className='text-3xl' onClick={() => history.back()}>
                        <ReactIcons.BiArrowBack />
                    </div>
                ) : (
                    <p> </p>
                )}
                <div className='flex items-center justify-center md:justify-between'>
                    <div className='flex items-center bg-slate-200 rounded-full px-5 py-1'>
                        <input
                            type='text'
                            className='outline-none  bg-slate-200'
                            placeholder='search'
                        />
                        <ReactIcons.AiOutlineSearch className='text-xl' />
                    </div>
                </div>
                <div
                    className='text-3xl'
                    onClick={providedData.handleBurgerToggler}
                >
                    <ReactIcons.HiMenuAlt3 />
                </div>
            </div>
        </div>
    );
};
export default Nav;
