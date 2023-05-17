import { useContext } from "react";
import ReactIcons from "./ReactIconsImport";
import { ContextProvider } from "../App";

const BurgerMenu = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 flex flex-col md:hidden bg-white'>
            <div className='absolute right-5 top-5'>
                <ReactIcons.AiOutlineClose
                    className='text-3xl'
                    onClick={providedData.handleBurgerToggler}
                />
            </div>
        </div>
    );
};
export default BurgerMenu;
