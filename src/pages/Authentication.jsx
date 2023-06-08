import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <div className='grid justify-center items-center min-h-[100vh]'>
            <div className='grid gap-5'>
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
