import Card from "./Card";
const Products = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='capitalize px-[5%] flex flex-col items-center md:block'>
            <p className='text-4xl font-bold'>headphones for you!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {data.map((item) => (
                    <Card key={item} />
                ))}
            </div>
        </div>
    );
};
export default Products;
