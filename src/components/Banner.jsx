// import bannerLogo from "../assets/bannerLogo.png";
const Banner = () => {
    return (
        <div className='px-[5%] mt-5'>
            <div className='capitalize flex flex-col md:flex-row bg-[#FCF0E4] px-[10%] py-[3%]'>
                <div className='flex flex-col justify-center gap-5'>
                    <p className='text-green-950 font-extrabold select-none text-3xl lg:text-5xl xl:text-7xl max-w-[700px]'>
                        grab upto 50% off on selected headphone
                    </p>
                    <div className='rounded-full bg-green-950 text-white w-fit p-3 cursor-pointer'>
                        buy now
                    </div>
                </div>
                <div className='flex'>
                    <img
                        src=''
                        alt=''
                        loading='lazy'
                        className='container w-[300px]'
                    />
                </div>
            </div>
        </div>
    );
};
export default Banner;
