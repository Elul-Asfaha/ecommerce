import { useContext } from "react";
import { ContextProvider } from "../App";

const Filter = () => {
    const providedData = useContext(ContextProvider);
    return (
        <div className='flex flex-col md:flex-row justify-between py-5 px-[5%] gap-1'>
            <div className='flex flex-wrap gap-2'>
                <label htmlFor='type' className='font-bold'>
                    Type:
                </label>
                <select
                    name='type'
                    className='flex   border border-black  rounded-full px-3  gap-2'
                    onChange={providedData.handleSelectChange}
                >
                    <option value=''>All</option>
                    <option value='0'>over-ear headphones</option>
                    <option value='1'>on-ear headphones</option>
                    <option value='2'>earbuds</option>
                    <option value='3'>wired</option>
                </select>
                <label htmlFor='price' className='font-bold'>
                    Price
                </label>
                <select
                    name='price'
                    id='price'
                    className='flex  border border-black w-fit rounded-full px-3  gap-2'
                    onChange={providedData.handleSelectChange}
                >
                    <option value=''>All</option>
                    <option value='100'>$100</option>
                    <option value='200'>$200</option>
                    <option value='500'>$500</option>
                    <option value='1000'>$1000+</option>
                </select>
                <label htmlFor='color' className='font-bold'>
                    Color
                </label>
                <select
                    name='color'
                    id='color'
                    className='flex  border border-black  rounded-full gap-2'
                    onChange={providedData.handleSelectChange}
                >
                    <option value=''>All</option>
                    <option value='Blue' className='px-3'>
                        Blue
                    </option>
                    <option value='Green' className='px-3'>
                        Green
                    </option>
                    <option value='Red' className='px-3'>
                        Red
                    </option>
                    <option value='Maroon' className='px-3'>
                        Maroon
                    </option>
                    <option value='Yellow' className='px-3'>
                        Yellow
                    </option>
                    <option value='Aquamarine' className='px-3'>
                        Aquamarine
                    </option>{" "}
                    <option value='Turquoise' className='px-3'>
                        Turquoise
                    </option>{" "}
                    <option value='Khaki' className='px-3'>
                        Khaki
                    </option>
                </select>
            </div>
            <div className='flex gap-2'>
                <label htmlFor='sort' className='font-bold'>
                    Sort:
                </label>
                <select
                    name='sort'
                    id='sort'
                    className='flex font-bold  border border-black w-fit rounded-full gap3 r2 px-2'
                    onChange={providedData.handleSortChange}
                >
                    <option value='0'>price asc</option>
                    <option value='1'>price dec</option>
                </select>
            </div>
        </div>
    );
};
export default Filter;
