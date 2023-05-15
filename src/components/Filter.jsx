const Filter = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between py-5 px-[5%] gap-1'>
            <div className='flex flex-wrap gap-2 lg:gap-2'>
                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>headphone type</option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>price</option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>review</option>
                </select>

                <select className='flex  border border-black  rounded-full gap-2'>
                    <option className=' px-3'>color</option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>material</option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>offer</option>
                </select>

                <select className='flex  border border-black  rounded-full px-3  gap-2'>
                    <option value=''>all filter</option>
                </select>
            </div>
            <select className='flex  border border-black w-fit rounded-full gap3 r2 px-2'>
                <option value=''>sort by</option>
            </select>
        </div>
    );
};
export default Filter;
