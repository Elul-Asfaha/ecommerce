import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='grid gap-5'>
                <div className='flex p-5 gap-5 border-b border-black text-xl'>
                    <Link to='/'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>

                <Outlet />
            </div>
        </div>
    );
};
export default Authentication;
