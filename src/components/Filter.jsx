import { FiChevronDown } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

const Filter = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between py-5 px-[5%] gap-1'>
            <div className='flex flex-wrap gap-1 lg:gap-2'>
                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        headphone type
                        <FiChevronDown />
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        price
                        <FiChevronDown />
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        review
                        <FiChevronDown />
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full gap-2'>
                    <option className=' px-3'>
                        <div>
                            color
                            <FiChevronDown />
                        </div>
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        material
                        <FiChevronDown />
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        offer
                        <FiChevronDown />
                    </option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option>
                        all filter
                        <FiFilter />
                    </option>
                </select>
            </div>
            <select className='flex  border border-black w-fit rounded-full gap3 r2 px-2'>
                <option>sort by</option>
                <FiChevronDown />
            </select>
        </div>
    );
};
export default Filter;
