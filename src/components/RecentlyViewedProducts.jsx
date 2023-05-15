import Card from "./Card";
const RecentlyViewedProducts = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='capitalize py-[1.5%] px-[5%] overflow-x-hidden '>
            <p className='text-4xl font-bold'>recently viewed</p>
            <div className='flex gap-5 overflow-x-scroll will-change-scroll hide-scroll-bar'>
                {data.map((item) => (
                    <Card key={item} />
                ))}
            </div>
        </div>
    );
};
export default RecentlyViewedProducts;
