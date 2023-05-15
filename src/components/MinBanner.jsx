import { FiChevronDown } from "react-icons/fi";
const MinBanner = () => {
    return (
        <div className='sm:flex hidden justify-between px-[5%] py-2 bg-green-900 text-white'>
            <div>
                <a href='tel:+251909791112'>0909791112</a>
            </div>
            <div className='flex gap-5 capitalize'>
                <div>get 50% off on selected items</div>
                <div className='border-r border-white'></div>
                <div>show now</div>
            </div>
            <div className='flex gap-5 capitalize'>
                <div className='flex justify-center items-center gap-1'>
                    <div>eng</div>
                    <FiChevronDown />
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <div>language</div>
                    <FiChevronDown />
                </div>
            </div>
        </div>
    );
};
export default MinBanner;
