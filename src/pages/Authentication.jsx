import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <div className='grid justify-center sm:items-center'>
            <div className='flex flex-col gap-5 pt-8 px-5 pb-4 sm:shadow rounded-sm'>
                <div className='flex gap-5 border-b border-black text-xl'>
                    <Link to='/' className='py-2'>
                        Login
                    </Link>
                    <Link to='/signup' className='py-2'>
                        Sign Up
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};
export default Authentication;
