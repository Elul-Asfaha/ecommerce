import { useContext } from "react";
import logo from "../assets/logo.png";
import ReactIcons from "./ReactIconsImport";
import { Link } from "react-router-dom";
import { ContextProvider } from "../App";
const Nav = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='flex items-center justify-between gap-5 capitalize px-[5%] pt-4'>
            <div className='flex-1 hidden md:flex items-center justify-between'>
                <Link to='/' className='flex w-[50px]'>
                    <img src={logo} alt='' className='cover' />
                </Link>
                <div>categories</div>
                <div>deals</div>
                <div className='capitalize'>what{"'s"} new</div>
                <div className='flex items-center gap-2'>
                    <div>delivery</div>
                    <ReactIcons.FiChevronDown />
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center md:justify-between'>
                <div className='flex items-center bg-slate-200 rounded-full px-5 py-1'>
                    <input
                        type='search'
                        className='outline-none  bg-slate-200'
                        placeholder='search'
                    />
                    <ReactIcons.AiOutlineSearch className='text-xl' />
                </div>
                <div className='hidden md:flex items-center gap-2'>
                    <ReactIcons.AiOutlineUser />
                    <div>account</div>
                </div>
                <div className='hidden relative md:flex items-center gap-4'>
                    <div className='relative'>
                        <ReactIcons.AiOutlineShoppingCart className='text-4xl' />
                        <div className='absolute bg-orange-300 text-center text-lg right-[-40%] top-[-30%] w-[30px] h-[30px] rounded-full '>
                            {providedData.cart.length}
                        </div>
                    </div>
                    <p>cart</p>
                </div>
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
