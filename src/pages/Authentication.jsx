import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='grid gap-5'>
                <div className='flex gap-5 border-b border-black text-xl'>
                    <Link to='/' className='p-5'>
                        Login
                    </Link>
                    <Link to='/signup' className='p-5'>
                        Sign Up
                    </Link>
                </div>

                <Outlet />
            </div>
        </div>
    );
};
export default Authentication;
